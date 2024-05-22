import DnDaApi from "../dndApi.js";
import { renderClassInfo } from "../renderClassInfo.js";

const api = new DnDaApi();
const classData = await api.getClass("fighter");
renderClassInfo(classData);
