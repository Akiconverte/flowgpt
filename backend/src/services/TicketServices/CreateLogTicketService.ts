// import AppError from "../../errors/AppError";
// import socketEmit from "../../helpers/socketEmit";
import LogTicket from "../../models/LogTicket";

type logType =
  | "access"
  | "create"
  | "closed"
  | "transfered"
  | "receivedTransfer"
  | "open"
  | "reopen"
  | "pending"
  | "nps"
  | "lgpd"
  | "queue"
  | "userDefine"
  | "delete"
  | "chatBot"
  | "autoClose"
  | "retriesLimitQueue"
  | "retriesLimitUserDefine"
  | "redirect"
  | "iaBot";

interface Request {
  type: logType;
  ticketId: number | string;
  userId?: number | string;
  queueId?: number | string;
  log?: object;
}

const CreateLogTicketService = async ({
  type,
  userId,
  ticketId,
  queueId,
  log
}: Request): Promise<void> => {
  await LogTicket.create({
    userId,
    ticketId,
    type,
    queueId,
    log
  });

  // socketEmit({
  //   companyId,
  //   type: "ticket:update",
  //   payload: ticket
  // });
};

export default CreateLogTicketService;
