import React, { useMemo, useState } from 'react';
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from 'recharts';
import { AlertTriangle, CheckCircle, SlidersHorizontal, RotateCcw } from 'lucide-react';
import {
  INITIAL_SURVEY_DATA,
  Language,
  SurveyDataset,
  computeSurveyStats,
} from '../data/projectConfig';
import { TranslationContent } from '../data/translations';

interface SurveyDashboardSectionProps {
  lang: Language;
  t: TranslationContent['dashboard'];
}

export const SurveyDashboardSection: React.FC<SurveyDashboardSectionProps> = ({
  lang,
  t,
}) => {
  const [surveyData, setSurveyData] = useState<SurveyDataset>(INITIAL_SURVEY_DATA);
  const [showCalculator, setShowCalculator] = useState(false);

  const stats = useMemo(() => computeSurveyStats(surveyData), [surveyData]);

  // Chart 1: Awareness Distribution (Pie / Donut)
  const pieData = useMemo(
    () => [
      {
        name: t.legendAware,
        value: stats.aware,
        pct: stats.awarePct,
        color: '#176B45',
      },
      {
        name: t.legendUnaware,
        value: stats.unaware,
        pct: stats.unawarePct,
        color: '#D88A9E',
      },
    ],
    [stats, t.legendAware, t.legendUnaware]
  );

  // Chart 2: Awareness Comparison (Bar)
  const barData = useMemo(
    () => [
      {
        category: t.legendAware,
        count: stats.aware,
        pct: stats.awarePct,
        fill: '#176B45',
      },
      {
        category: t.legendUnaware,
        count: stats.unaware,
        pct: stats.unawarePct,
        fill: '#D88A9E',
      },
      {
        category: t.legendInterested,
        count: stats.interested,
        pct: stats.interestedPct,
        fill: '#4C9A73',
      },
    ],
    [stats, t.legendAware, t.legendUnaware, t.legendInterested]
  );

  // Chart 3: Question-wise Analysis
  const questionChartData = useMemo(
    () =>
      surveyData.questions.map((q, index) => ({
        shortLabel: `Q${index + 1}`,
        fullQuestion: lang === 'en' ? q.questionEn : q.questionHi,
        yes: q.yesCount,
        no: q.noCount,
        unsure: q.unsureCount,
      })),
    [surveyData.questions, lang]
  );

  const handleNumberUpdate = (
    field: 'totalRespondents' | 'awareCount' | 'unawareCount' | 'interestedCount',
    rawValue: string
  ) => {
    const parsed = Number(rawValue);
    if (Number.isNaN(parsed)) return;
    const safeVal = Math.max(0, Math.floor(parsed));

    setSurveyData((prev) => {
      if (field === 'awareCount') {
        const clampedAware = Math.min(safeVal, prev.totalRespondents);
        return {
          ...prev,
          awareCount: clampedAware,
          unawareCount: Math.max(0, prev.totalRespondents - clampedAware),
        };
      }
      if (field === 'unawareCount') {
        const clampedUnaware = Math.min(safeVal, prev.totalRespondents);
        return {
          ...prev,
          unawareCount: clampedUnaware,
          awareCount: Math.max(0, prev.totalRespondents - clampedUnaware),
        };
      }
      if (field === 'totalRespondents') {
        const nextTotal = Math.max(1, safeVal);
        const nextAware = Math.min(prev.awareCount, nextTotal);
        return {
          ...prev,
          totalRespondents: nextTotal,
          awareCount: nextAware,
          unawareCount: nextTotal - nextAware,
          interestedCount: Math.min(prev.interestedCount, nextTotal),
        };
      }
      return {
        ...prev,
        interestedCount: Math.min(safeVal, prev.totalRespondents),
      };
    });
  };

  const handleReset = () => {
    setSurveyData(INITIAL_SURVEY_DATA);
  };

  return (
    <section
      id="survey-dashboard"
      className="py-16 sm:py-20 bg-white border-b border-[#242B27]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading + Demo Toggle */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
          <div className="max-w-3xl">
            <p className="text-xs sm:text-sm font-semibold tracking-wide text-[#176B45] mb-2">
              {t.eyebrow}
            </p>
            <h2 className="font-display text-2xl sm:text-4xl font-semibold text-[#242B27] tracking-tight text-balance">
              {t.heading}
            </h2>
            <p className="mt-3 text-base text-[#242B27]/75 leading-relaxed">
              {t.subtitle}
            </p>
          </div>

          <button
            type="button"
            onClick={() => setShowCalculator((prev) => !prev)}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#176B45] bg-[#DDF1E4]/75 hover:bg-[#DDF1E4] border border-[#176B45]/20 rounded-xl transition-colors cursor-pointer whitespace-nowrap shrink-0 self-start lg:self-auto"
          >
            <SlidersHorizontal className="w-4 h-4" aria-hidden="true" />
            <span>
              {showCalculator ? t.calculatorToggleClose : t.calculatorToggleOpen}
            </span>
          </button>
        </div>

        {/* Mandatory Sample Data Warning Banner */}
        {!surveyData.isVerifiedData ? (
          <div
            role="alert"
            className="mt-8 rounded-2xl bg-[#F5DCE5]/75 border border-[#8E3552]/25 p-5 sm:p-6 flex items-start gap-3.5"
          >
            <AlertTriangle
              className="w-5 h-5 text-[#8E3552] shrink-0 mt-0.5"
              aria-hidden="true"
            />
            <div>
              <p className="text-sm sm:text-base font-bold text-[#5E1F34] tracking-tight">
                {t.sampleWarningTitle}
              </p>
              <p className="mt-1 text-sm text-[#242B27]/85 leading-relaxed">
                {t.sampleWarningBody}
              </p>
            </div>
          </div>
        ) : (
          <div className="mt-8 rounded-2xl bg-[#DDF1E4] border border-[#176B45]/25 p-4 flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-[#176B45] shrink-0" aria-hidden="true" />
            <p className="text-sm font-semibold text-[#176B45]">
              {t.verifiedBadgeText}
            </p>
          </div>
        )}

        {/* Validation Error Alert (if config is ever broken) */}
        {!stats.isValid && (
          <div
            role="alert"
            className="mt-4 rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm font-medium text-red-800"
          >
            {lang === 'en' ? stats.validationErrorEn : stats.validationErrorHi}
          </div>
        )}

        {/* Optional Interactive Viva Demo Controls */}
        {showCalculator && (
          <div className="mt-6 rounded-2xl bg-[#FAF9F4] border border-[#242B27]/15 p-5 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <div>
                <h3 className="text-sm font-semibold text-[#242B27]">
                  {t.calculatorTitle}
                </h3>
                <p className="text-xs text-[#242B27]/70 mt-0.5">
                  {t.calculatorHelp}
                </p>
              </div>
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#242B27] bg-white border border-[#242B27]/15 rounded-lg hover:bg-[#DDF1E4]/40 transition-colors cursor-pointer shrink-0 self-start"
              >
                <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{t.resetButton}</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <label className="block">
                <span className="text-xs font-medium text-[#242B27]/75">
                  {t.inputTotal}
                </span>
                <input
                  type="number"
                  min={1}
                  value={surveyData.totalRespondents}
                  onChange={(e) => handleNumberUpdate('totalRespondents', e.target.value)}
                  className="mt-1 w-full rounded-lg border border-[#242B27]/20 bg-white px-3 py-2 text-sm font-mono-num text-[#242B27] focus:outline-2 focus:outline-[#176B45]"
                />
              </label>

              <label className="block">
                <span className="text-xs font-medium text-[#242B27]/75">
                  {t.inputAware}
                </span>
                <input
                  type="number"
                  min={0}
                  max={surveyData.totalRespondents}
                  value={surveyData.awareCount}
                  onChange={(e) => handleNumberUpdate('awareCount', e.target.value)}
                  className="mt-1 w-full rounded-lg border border-[#242B27]/20 bg-white px-3 py-2 text-sm font-mono-num text-[#242B27] focus:outline-2 focus:outline-[#176B45]"
                />
              </label>

              <label className="block">
                <span className="text-xs font-medium text-[#242B27]/75">
                  {t.inputUnaware}
                </span>
                <input
                  type="number"
                  min={0}
                  max={surveyData.totalRespondents}
                  value={surveyData.unawareCount}
                  onChange={(e) => handleNumberUpdate('unawareCount', e.target.value)}
                  className="mt-1 w-full rounded-lg border border-[#242B27]/20 bg-white px-3 py-2 text-sm font-mono-num text-[#242B27] focus:outline-2 focus:outline-[#176B45]"
                />
              </label>

              <label className="block">
                <span className="text-xs font-medium text-[#242B27]/75">
                  {t.inputInterested}
                </span>
                <input
                  type="number"
                  min={0}
                  max={surveyData.totalRespondents}
                  value={surveyData.interestedCount}
                  onChange={(e) => handleNumberUpdate('interestedCount', e.target.value)}
                  className="mt-1 w-full rounded-lg border border-[#242B27]/20 bg-white px-3 py-2 text-sm font-mono-num text-[#242B27] focus:outline-2 focus:outline-[#176B45]"
                />
              </label>
            </div>
          </div>
        )}

        {/* Four Statistic Cards */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-[#FAF9F4] rounded-2xl p-6 border border-[#242B27]/10">
            <p className="text-xs font-semibold text-[#242B27]/65">
              {t.cards.totalTitle}
            </p>
            <p className="mt-2 font-mono-num text-3xl sm:text-4xl font-semibold text-[#242B27]">
              {stats.total}
            </p>
            <p className="mt-1.5 text-xs text-[#242B27]/70">
              {t.cards.totalSub} · 100.0%
            </p>
          </div>

          <div className="bg-[#DDF1E4]/55 rounded-2xl p-6 border border-[#176B45]/20">
            <p className="text-xs font-semibold text-[#176B45]">
              {t.cards.awareTitle}
            </p>
            <div className="mt-2 flex items-baseline gap-2.5">
              <p className="font-mono-num text-3xl sm:text-4xl font-semibold text-[#176B45]">
                {stats.aware}
              </p>
              <span className="font-mono-num text-sm font-semibold text-[#176B45]">
                ({stats.awarePct}%)
              </span>
            </div>
            <p className="mt-1.5 text-xs text-[#242B27]/75">
              {t.cards.awareSub}
            </p>
          </div>

          <div className="bg-[#F5DCE5]/55 rounded-2xl p-6 border border-[#8E3552]/20">
            <p className="text-xs font-semibold text-[#7A2844]">
              {t.cards.unawareTitle}
            </p>
            <div className="mt-2 flex items-baseline gap-2.5">
              <p className="font-mono-num text-3xl sm:text-4xl font-semibold text-[#7A2844]">
                {stats.unaware}
              </p>
              <span className="font-mono-num text-sm font-semibold text-[#7A2844]">
                ({stats.unawarePct}%)
              </span>
            </div>
            <p className="mt-1.5 text-xs text-[#242B27]/75">
              {t.cards.unawareSub}
            </p>
          </div>

          <div className="bg-[#FAF9F4] rounded-2xl p-6 border border-[#242B27]/10">
            <p className="text-xs font-semibold text-[#176B45]">
              {t.cards.interestedTitle}
            </p>
            <div className="mt-2 flex items-baseline gap-2.5">
              <p className="font-mono-num text-3xl sm:text-4xl font-semibold text-[#242B27]">
                {stats.interested}
              </p>
              <span className="font-mono-num text-sm font-semibold text-[#176B45]">
                ({stats.interestedPct}%)
              </span>
            </div>
            <p className="mt-1.5 text-xs text-[#242B27]/70">
              {t.cards.interestedSub}
            </p>
          </div>
        </div>

        {/* Charts Row 1: Pie Chart + Bar Comparison Chart */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Chart 1: Awareness Distribution */}
          <div className="bg-[#FAF9F4] rounded-2xl p-6 border border-[#242B27]/10">
            <h3 className="font-display text-lg sm:text-xl font-semibold text-[#242B27]">
              {t.chart1Title}
            </h3>
            <p className="text-xs sm:text-sm text-[#242B27]/70 mt-1">
              {t.chart1Subtitle}
            </p>

            <div className="mt-5 h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={62}
                    outerRadius={98}
                    paddingAngle={3}
                  >
                    {pieData.map((entry, idx) => (
                      <Cell key={idx} fill={entry.color} stroke="#FFFFFF" strokeWidth={2} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value, name) => {
                      const numValue = Number(value ?? 0);
                      const pct =
                        stats.total > 0
                          ? ((numValue / stats.total) * 100).toFixed(1)
                          : '0.0';
                      return [`${numValue} ${t.respondentsUnit} (${pct}%)`, String(name ?? '')];
                    }}
                    contentStyle={{
                      backgroundColor: '#FFFFFF',
                      borderRadius: '12px',
                      border: '1px solid rgba(36, 43, 39, 0.12)',
                      fontSize: '13px',
                    }}
                  />
                  <Legend verticalAlign="bottom" height={36} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Chart 2: Awareness Comparison */}
          <div className="bg-[#FAF9F4] rounded-2xl p-6 border border-[#242B27]/10">
            <h3 className="font-display text-lg sm:text-xl font-semibold text-[#242B27]">
              {t.chart2Title}
            </h3>
            <p className="text-xs sm:text-sm text-[#242B27]/70 mt-1">
              {t.chart2Subtitle}
            </p>

            <div className="mt-5 h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={barData}
                  margin={{ top: 12, right: 16, left: 0, bottom: 8 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(36,43,39,0.08)" />
                  <XAxis
                    dataKey="category"
                    tick={{ fill: '#242B27', fontSize: 12 }}
                    axisLine={{ stroke: 'rgba(36,43,39,0.15)' }}
                  />
                  <YAxis
                    tick={{ fill: '#242B27', fontSize: 12 }}
                    axisLine={{ stroke: 'rgba(36,43,39,0.15)' }}
                  />
                  <Tooltip
                    formatter={(value) => [
                      `${Number(value ?? 0)} ${t.respondentsUnit}`,
                      '',
                    ]}
                    contentStyle={{
                      backgroundColor: '#FFFFFF',
                      borderRadius: '12px',
                      border: '1px solid rgba(36, 43, 39, 0.12)',
                      fontSize: '13px',
                    }}
                  />
                  <Bar dataKey="count" radius={[8, 8, 0, 0]} maxBarSize={64}>
                    {barData.map((entry, idx) => (
                      <Cell key={idx} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Chart 3: Question-wise Analysis */}
        <div className="mt-6 bg-[#FAF9F4] rounded-2xl p-6 sm:p-8 border border-[#242B27]/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <div>
              <h3 className="font-display text-lg sm:text-xl font-semibold text-[#242B27]">
                {t.chart3Title}
              </h3>
              <p className="text-xs sm:text-sm text-[#242B27]/70 mt-1">
                {t.chart3Subtitle}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7 h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={questionChartData}
                  layout="vertical"
                  margin={{ top: 8, right: 20, left: 8, bottom: 8 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(36,43,39,0.08)" />
                  <XAxis type="number" tick={{ fill: '#242B27', fontSize: 12 }} />
                  <YAxis
                    type="category"
                    dataKey="shortLabel"
                    width={36}
                    tick={{ fill: '#242B27', fontSize: 12, fontWeight: 600 }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#FFFFFF',
                      borderRadius: '12px',
                      border: '1px solid rgba(36, 43, 39, 0.12)',
                      fontSize: '13px',
                    }}
                  />
                  <Legend />
                  <Bar dataKey="yes" name={t.legendYes} stackId="a" fill="#176B45" />
                  <Bar dataKey="no" name={t.legendNo} stackId="a" fill="#D88A9E" />
                  <Bar
                    dataKey="unsure"
                    name={t.legendUnsure}
                    stackId="a"
                    fill="#9CA3AF"
                    radius={[0, 6, 6, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Question Reference Key */}
            <div className="lg:col-span-5 space-y-2.5">
              {questionChartData.map((q) => (
                <div
                  key={q.shortLabel}
                  className="bg-white rounded-xl p-3.5 border border-[#242B27]/10 text-xs sm:text-sm"
                >
                  <div className="flex items-start gap-2.5">
                    <span className="font-mono-num font-semibold text-[#176B45] shrink-0">
                      {q.shortLabel}
                    </span>
                    <div className="flex-1">
                      <p className="text-[#242B27] font-medium leading-snug">
                        {q.fullQuestion}
                      </p>
                      <p className="mt-1 text-xs text-[#242B27]/65 font-mono-num">
                        {t.legendYes}: {q.yes} · {t.legendNo}: {q.no} · {t.legendUnsure}:{' '}
                        {q.unsure}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
