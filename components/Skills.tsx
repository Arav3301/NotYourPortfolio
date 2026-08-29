"use client";

import { skills } from "@/lib/data";
import type { Skill } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import BrandLogo from "@/components/icons/BrandLogo";

type Grouped = { name: string; items: Skill[] };

function groupSkills(): Grouped[] {
  const order = ["Languages", "Web", "Tools"];
  const groups: Grouped[] = order.map((name) => ({ name, items: [] }));
  for (const s of skills) {
    const g = groups.find((x) => x.name === s.category);
    if (g) g.items.push(s);
  }
  return groups;
}

/**
 * Things I've Picked Up — big brand-logos only. Each tile shows the real logo
 * in black & white; on hover it snaps to its original brand colors and the
 * skill name fades in beneath the logo (and vanishes when the cursor leaves).
 */
function SkillTile({ skill }: { skill: Skill }) {
  return (
    <div className="group flex min-h-28 flex-col items-center justify-center gap-3 rounded-2xl border border-border-subtle bg-surface-1/40 px-4 py-5 transition-colors duration-300 hover:border-border-strong hover:bg-surface-1 sm:min-h-32 sm:py-6">
      <BrandLogo
        name={skill.name}
        className="h-12 w-12 shrink-0 grayscale opacity-75 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-100 sm:h-16 sm:w-16"
      />
      <span className="pointer-events-none text-xs font-medium text-ink opacity-0 -translate-y-1 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:text-sm">
        {skill.name}
      </span>
    </div>
  );
}

export default function Skills() {
  const groups = groupSkills();

  return (
    <section id="skills" className="scroll-mt-24">
      <div className="container-x py-14 sm:py-20">
        <Reveal>
          <SectionHeading
            title="Things I've Picked Up"
            subtitle="Tools collected along the way. Hover the badges."
          />
        </Reveal>

        <div className="mt-8 flex flex-col gap-8 sm:gap-10">
          {groups.map((group, gi) => (
            <Reveal key={group.name} delay={gi * 0.06}>
              <div className="flex flex-col gap-4">
                <h3 className="meta-label">{group.name}</h3>
                <div
                  className="grid gap-3 sm:gap-5 lg:gap-6"
                  style={{
                    gridTemplateColumns: `repeat(${group.items.length}, minmax(0, 1fr))`,
                  }}
                >
                  {group.items.map((skill) => (
                    <SkillTile key={skill.name} skill={skill} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}