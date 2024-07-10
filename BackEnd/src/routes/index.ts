import { Router } from "express";
import { userRoutes } from "./maisSaudeRoutes/user.routes";
import { postRoutes } from "./maisSaudeRoutes/post.routes";
import { entityMinsaRoutes } from "./minsaRoutes/entidade.routes";
import { contactMinsaRoutes } from "./minsaRoutes/contacto.routes";
import { adressMinsaRoutes } from "./minsaRoutes/endereco.routes";
import { especialistaMinsaRoutes } from "./minsaRoutes/especialista.routes";
import { especialistaSistemaRoutes } from "./maisSaudeRoutes/especialista.routes";
import { adressSistemRoutes } from "./maisSaudeRoutes/endereco.routes";
import { contactSistemRoutes } from "./maisSaudeRoutes/contacto.routes";
import { entityRoutes } from "./maisSaudeRoutes/entidade.routes";
import { dayRoutes } from "./maisSaudeRoutes/diasDisponiveis.routes";
import { hourRoutes } from "./maisSaudeRoutes/horasDisponiveis.routes";
import { consultaRoutes } from "./maisSaudeRoutes/consultas.routes";
import { videoCallRoutes } from "./maisSaudeRoutes/videoCall.routes";
import { pedidoRoutes } from "./maisSaudeRoutes/pedidoDeConexao.routes";
import { connectionRoutes } from "./maisSaudeRoutes/myConnections.routes";
import { messagesRoutes } from "./maisSaudeRoutes/messages.routes";
import { notificationsRoutes } from "./maisSaudeRoutes/notifications.routes";
import { uploadRoutes } from "./maisSaudeRoutes/uploads.routes";
import { reactionsRoutes } from "./maisSaudeRoutes/reactions.routes";
import { commentsRoutes } from "./maisSaudeRoutes/comments.routes";
import { followRoutes } from "./maisSaudeRoutes/followers.routes";
import { shareRoutes } from "./maisSaudeRoutes/share.routes";

const router = Router();

router.use("/usuarios", userRoutes)
router.use("/uploads", uploadRoutes)
router.use("/posts", postRoutes)
router.use("/especialistaSistema", especialistaSistemaRoutes)
router.use("/enderecoSistem", adressSistemRoutes)
router.use("/contactoSistem", contactSistemRoutes )
router.use("/entidadeSistem", entityRoutes)
router.use("/diasDisponiveis", dayRoutes)
router.use("/horasDisponiveis", hourRoutes)
router.use("/consultas", consultaRoutes)
router.use("/videoCall",videoCallRoutes)
router.use("/pedidoDeConexao",pedidoRoutes)
router.use("/myConnections",connectionRoutes)
router.use("/messages",messagesRoutes)
router.use("/notifications",notificationsRoutes)
router.use("/reactions", reactionsRoutes)
router.use("/comments", commentsRoutes)
router.use("/followers", followRoutes)
router.use("/share", shareRoutes)

router.use("/entidadeMinsa", entityMinsaRoutes)
router.use("/contactoMinsa", contactMinsaRoutes)
router.use("/enderecoMinsa", adressMinsaRoutes)
router.use("/especialistasMinsa", especialistaMinsaRoutes)

export {router}