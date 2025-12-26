'use server';
/**
 * @fileOverview This file defines a Genkit flow for auto-suggesting skills based on project descriptions.
 *
 * It exports:
 * - `suggestSkills`: A function that takes project descriptions as input and returns a list of suggested skills with confidence levels.
 * - `SuggestSkillsInput`: The input type for the `suggestSkills` function.
 * - `SuggestSkillsOutput`: The output type for the `suggestSkills` function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestSkillsInputSchema = z.object({
  projectDescriptions: z
    .array(z.string())
    .describe('An array of project descriptions to analyze.'),
});
export type SuggestSkillsInput = z.infer<typeof SuggestSkillsInputSchema>;

const SuggestSkillsOutputSchema = z.object({
  suggestedSkills: z.array(
    z.object({
      skill: z.string().describe('The suggested skill.'),
      confidence: z
        .number()
        .min(0)
        .max(1)
        .describe('The confidence level (0-1) for the suggested skill.'),
    })
  ).describe('A list of suggested skills with confidence levels.'),
});
export type SuggestSkillsOutput = z.infer<typeof SuggestSkillsOutputSchema>;

export async function suggestSkills(input: SuggestSkillsInput): Promise<SuggestSkillsOutput> {
  return suggestSkillsFlow(input);
}

const suggestSkillsPrompt = ai.definePrompt({
  name: 'suggestSkillsPrompt',
  input: {schema: SuggestSkillsInputSchema},
  output: {schema: SuggestSkillsOutputSchema},
  prompt: `You are an AI assistant that analyzes project descriptions and suggests relevant skills.

  Analyze the following project descriptions and suggest a list of skills that the engineer likely possesses, along with a confidence level (0-1) for each skill.
  Return the skills in JSON format.

  Project Descriptions:
  {{#each projectDescriptions}}
  - {{{this}}}
  {{/each}}`,
});

const suggestSkillsFlow = ai.defineFlow(
  {
    name: 'suggestSkillsFlow',
    inputSchema: SuggestSkillsInputSchema,
    outputSchema: SuggestSkillsOutputSchema,
  },
  async input => {
    const {output} = await suggestSkillsPrompt(input);
    return output!;
  }
);
