import { SystemPrompt as TSystemPrompt } from "../api/systemPrompt/SystemPrompt";

export const SYSTEMPROMPT_TITLE_FIELD = "id";

export const SystemPromptTitle = (record: TSystemPrompt): string => {
  return record.id?.toString() || String(record.id);
};
