import { SystemPromptWhereInput } from "./SystemPromptWhereInput";
import { SystemPromptOrderByInput } from "./SystemPromptOrderByInput";

export type SystemPromptFindManyArgs = {
  where?: SystemPromptWhereInput;
  orderBy?: Array<SystemPromptOrderByInput>;
  skip?: number;
  take?: number;
};
