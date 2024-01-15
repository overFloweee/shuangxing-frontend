import { getCurrentInstance } from "vue";
import { extend } from "../utils";
function useExpose(apis) {
  const instance = getCurrentInstance();
  if (instance) {
    extend(instance.proxy, apis);
  }
}
export {
  useExpose
};
