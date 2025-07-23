import { httpAxios } from "@/helper/httpHelper";
export async function addTask(task) {
  const result = await httpAxios.post("/api/task", task, { withCredentials: true }).then((response) => response.data);
  return result;
}
