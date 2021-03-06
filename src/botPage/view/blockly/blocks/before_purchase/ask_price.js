// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#pbvgpo
import { getPurchaseChoices } from '../../../blockly/utils';
import { insideBeforePurchase } from '../../relationChecker';
import { translator } from '../../../../../common/translator';

Blockly.Blocks.ask_price = {
  init: function init() {
    this.appendDummyInput()
      .appendField(translator.translateText('Ask Price'))
      .appendField(new Blockly.FieldDropdown(() => getPurchaseChoices()), 'PURCHASE_LIST');
    this.setOutput(true, 'Number');
    this.setColour('#f2f2f2');
    this.setTooltip(translator.translateText('Ask Price for selected proposal')); // eslint-disable-line max-len
    this.setHelpUrl('https://github.com/binary-com/binary-bot/wiki');
  },
  onchange: function onchange(ev) {
    insideBeforePurchase(this, ev, 'Ask Price');
  },
};
Blockly.JavaScript.ask_price = (block) => {
  const purchaseList = block.getFieldValue('PURCHASE_LIST');
  const code = `Number(purchaseCtrl.getContract('${purchaseList}').ask_price)`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
