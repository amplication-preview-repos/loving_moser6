import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SystemPromptService } from "./systemPrompt.service";
import { SystemPromptControllerBase } from "./base/systemPrompt.controller.base";

@swagger.ApiTags("systemPrompts")
@common.Controller("systemPrompts")
export class SystemPromptController extends SystemPromptControllerBase {
  constructor(
    protected readonly service: SystemPromptService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
