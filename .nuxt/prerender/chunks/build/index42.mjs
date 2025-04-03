import { $dt } from 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/@primeuix/styled/index.mjs';
import * as utils from 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/@primeuix/utils/index.mjs';

function blockBodyScroll() {
  utils.blockBodyScroll({
    variableName: $dt("scrollbar.width").name
  });
}
function unblockBodyScroll() {
  utils.unblockBodyScroll({
    variableName: $dt("scrollbar.width").name
  });
}

export { blockBodyScroll as b, unblockBodyScroll as u };
//# sourceMappingURL=index42.mjs.map
