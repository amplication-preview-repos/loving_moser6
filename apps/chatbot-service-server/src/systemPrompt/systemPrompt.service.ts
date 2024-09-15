import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SystemPromptServiceBase } from "./base/systemPrompt.service.base";

@Injectable()
export class SystemPromptService extends SystemPromptServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
