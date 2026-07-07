import { useState } from "react";
import { BsCheckCircleFill, BsGear, BsPlay, BsXCircleFill } from "react-icons/bs";
import PracticeCodeEditor from "./PracticeCodeEditor";
import type { PracticeProblem } from "./problems";
import { practiceBorder, practiceMuted, practicePanel } from "./shared";

type PracticeEditorPanelProps = {
  problem: PracticeProblem;
};

export default function PracticeEditorPanel({ problem }: PracticeEditorPanelProps) {
  const [bottomTab, setBottomTab] = useState<"console" | "results">("results");
  const passedCount = problem.testCases.filter((t) => t.passed).length;
  const totalRuntime = problem.testCases
    .filter((t) => t.passed && t.runtime !== "—")
    .reduce((sum, t) => sum + parseInt(t.runtime, 10), 0);

  return (
    <div className={`${practicePanel} flex h-full flex-col overflow-hidden !p-0`}>
      <div
        className={`flex shrink-0 items-center justify-between border-b ${practiceBorder} bg-[#FAFAFA] px-3 py-2.5`}
      >
        <div className="flex items-center gap-2">
          <select
            className={`rounded-lg border ${practiceBorder} bg-white px-2.5 py-1.5 text-xs font-medium text-[#0A0A0A] outline-none`}
            defaultValue="python"
            aria-label="Language"
          >
            <option value="python">Python 3.11</option>
            <option value="javascript">JavaScript</option>
            <option value="typescript">TypeScript</option>
          </select>
          <button
            type="button"
            aria-label="Editor settings"
            className="flex h-8 w-8 items-center justify-center rounded-lg text-[#5B5B65] hover:bg-white hover:text-[#0A0A0A]"
          >
            <BsGear className="h-3.5 w-3.5" />
          </button>
        </div>
        <button
          type="button"
          className="flex items-center gap-1.5 rounded-lg bg-[#2ea043] px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-[#268a39]"
        >
          <BsPlay className="h-3 w-3" />
          Run Code
        </button>
      </div>

      <PracticeCodeEditor code={problem.starterCode} />

      <div className={`shrink-0 border-t ${practiceBorder} bg-[#FAFAFA]`}>
        <div className={`flex items-center border-b ${practiceBorder}`}>
          {(["results", "console"] as const).map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setBottomTab(t)}
              className={`relative px-4 py-2.5 text-[10px] font-semibold uppercase tracking-wide transition-colors ${
                bottomTab === t ? "text-[#0A0A0A]" : practiceMuted
              }`}
            >
              {t === "console" ? "Console" : "Test Results"}
              {bottomTab === t && (
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#4F46E5]" />
              )}
            </button>
          ))}
          <div className="ml-auto flex items-center gap-2 px-4">
            {passedCount === problem.testCases.length ? (
              <span className="flex items-center gap-1 text-[10px] font-medium text-emerald-700">
                <BsCheckCircleFill className="h-3 w-3" />
                All Passed
              </span>
            ) : (
              <span className="flex items-center gap-1 text-[10px] font-medium text-amber-700">
                <BsXCircleFill className="h-3 w-3" />
                {passedCount}/{problem.testCases.length} Passed
              </span>
            )}
          </div>
        </div>

        <div className="max-h-[180px] overflow-y-auto">
          {bottomTab === "results" ? (
            <div className="divide-y divide-[rgba(0,0,0,0.06)]">
              {problem.testCases.map((t) => (
                <div key={t.id} className="bg-white px-4 py-3">
                  <div className="flex items-center justify-between">
                    <span
                      className={`flex items-center gap-1.5 text-xs font-semibold ${
                        t.passed ? "text-emerald-700" : "text-red-600"
                      }`}
                    >
                      {t.passed ? (
                        <BsCheckCircleFill className="h-3.5 w-3.5" />
                      ) : (
                        <BsXCircleFill className="h-3.5 w-3.5" />
                      )}
                      {t.label} — {t.passed ? "Passed" : "Failed"}
                    </span>
                    {t.passed && (
                      <span className={`text-[10px] ${practiceMuted}`}>
                        {t.runtime} · {t.memory}
                      </span>
                    )}
                  </div>

                  <div className="mt-2 space-y-1 font-mono text-[11px]">
                    <p className="text-[#5B5B65]">
                      <span className="text-[#9CA3AF]">Input: </span>
                      {t.input}
                    </p>
                    <p className="text-[#5B5B65]">
                      <span className="text-[#9CA3AF]">Output: </span>
                      <span className={t.passed ? "text-emerald-700" : "text-red-600"}>
                        {t.output}
                      </span>
                    </p>
                    <p className="text-[#5B5B65]">
                      <span className="text-[#9CA3AF]">Expected: </span>
                      {t.expected}
                    </p>
                  </div>

                  {t.error && (
                    <p className="mt-2 rounded-md border border-red-200 bg-red-50 px-2.5 py-1.5 text-[11px] text-red-700">
                      {t.error}
                    </p>
                  )}
                </div>
              ))}

              {passedCount > 0 && (
                <div className="flex items-center justify-between bg-[#F5F5F7] px-4 py-2.5 text-[10px]">
                  <span className={practiceMuted}>
                    Runtime:{" "}
                    <span className="font-semibold text-[#0A0A0A]">{totalRuntime} ms</span>
                  </span>
                  <span className={practiceMuted}>
                    Function:{" "}
                    <span className="font-semibold text-[#0A0A0A]">
                      Solution.{problem.functionName}()
                    </span>
                  </span>
                </div>
              )}
            </div>
          ) : (
            <div className="bg-[#1e1e1e] px-4 py-3 font-mono text-[11px] leading-relaxed">
              {problem.consoleLines.map((line, i) => (
                <p
                  key={i}
                  className={
                    line.type === "pass"
                      ? "text-[#3fb950]"
                      : line.type === "fail"
                        ? "text-[#f85149]"
                        : "text-[#8b949e]"
                  }
                >
                  {line.text}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
