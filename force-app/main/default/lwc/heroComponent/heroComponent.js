import { LightningElement } from "lwc";
import IMAGES from "@salesforce/resourceUrl/Images";
import myModal from "c/modalComponentLWC";

export default class HeroComponent extends LightningElement {
  imageURL = IMAGES + "/building1.png";

  handleClick() {
    // console.log('button clicked');
    myModal.open({
      // `label` is not included here in this example.
      // it is set on lightning-modal-header instead
      size: "compact"
      //description: 'Accessible description of modal\'s purpose',
      // bodyContent: 'Passed into content api',
    });
  }
}
