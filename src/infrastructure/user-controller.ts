import { Request, Response } from "express";

import { WelcomeEmailSender } from "../application/welcome-email-sender";

export class UserController {
  constructor(private readonly welcomeEmailSender: WelcomeEmailSender) {}

  async run(req: Request, res: Response) {
    const userId = req.params.id;
    await this.welcomeEmailSender.run(userId);
    res.status(200).send();
  }
}
