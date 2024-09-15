import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SystemPromptResolverBase } from "./base/systemPrompt.resolver.base";
import { SystemPrompt } from "./base/SystemPrompt";
import { SystemPromptService } from "./systemPrompt.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SystemPrompt)
export class SystemPromptResolver extends SystemPromptResolverBase {
  constructor(
    protected readonly service: SystemPromptService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
