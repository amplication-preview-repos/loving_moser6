import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SystemPromptModuleBase } from "./base/systemPrompt.module.base";
import { SystemPromptService } from "./systemPrompt.service";
import { SystemPromptController } from "./systemPrompt.controller";
import { SystemPromptResolver } from "./systemPrompt.resolver";

@Module({
  imports: [SystemPromptModuleBase, forwardRef(() => AuthModule)],
  controllers: [SystemPromptController],
  providers: [SystemPromptService, SystemPromptResolver],
  exports: [SystemPromptService],
})
export class SystemPromptModule {}
