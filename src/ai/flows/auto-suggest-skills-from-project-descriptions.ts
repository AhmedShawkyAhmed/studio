import { z } from "zod";

const SuggestSkillsInputSchema = z.object({
  projectDescriptions: z.array(z.string()),
});

export type SuggestSkillsInput = z.infer<typeof SuggestSkillsInputSchema>;

const SuggestSkillsOutputSchema = z.object({
  suggestedSkills: z.array(
    z.object({
      skill: z.string(),
      confidence: z.number().min(0).max(1),
    })
  ),
});

export type SuggestSkillsOutput = z.infer<typeof SuggestSkillsOutputSchema>;

const skillKeywords: Record<string, string[]> = {
  Flutter: ["flutter", "dart", "bloc", "provider"],
  "Android (Kotlin)": ["kotlin", "android"],
  "iOS (Swift)": ["swift", "ios"],
  Firebase: ["firebase", "firestore", "auth"],
  "Google Maps": ["maps", "geolocation", "gps"],
  WebSockets: ["socket", "realtime", "websocket"],
  "REST APIs": ["api", "rest", "http"],
  "Clean Architecture": ["clean architecture", "mvc", "mvvm"],
  "CI/CD": ["ci", "cd", "github actions", "pipeline"],
};

export async function suggestSkills(
  input: SuggestSkillsInput
): Promise<SuggestSkillsOutput> {
  // ✅ Validate input
  const parsed = SuggestSkillsInputSchema.safeParse(input);

  if (!parsed.success) {
    return { suggestedSkills: [] };
  }

  const text = parsed.data.projectDescriptions
    .join(" ")
    .toLowerCase();

  const suggestedSkills: SuggestSkillsOutput["suggestedSkills"] = [];

  for (const [skill, keywords] of Object.entries(skillKeywords)) {
    let matches = 0;

    for (const keyword of keywords) {
      if (text.includes(keyword)) {
        matches++;
      }
    }

    if (matches > 0) {
      suggestedSkills.push({
        skill,
        confidence: Math.min(1, 0.4 + matches / keywords.length),
      });
    }
  }

  // Optional fake delay (UX polish)
  await new Promise<void>(resolve => setTimeout(resolve, 500));

  // ✅ GUARANTEED return
  return {
    suggestedSkills: suggestedSkills.sort(
      (a, b) => b.confidence - a.confidence
    ),
  };
}
