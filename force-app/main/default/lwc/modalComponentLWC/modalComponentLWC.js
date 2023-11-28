import LightningModal from "lightning/modal";
import lastName from "@salesforce/schema/lead.lastName";
import company from "@salesforce/schema/lead.Company";
import email from "@salesforce/schema/lead.email";
import ToastContainer from "lightning/toastContainer";
import Toast from "lightning/Toast";

export default class ModalComponentLWC extends LightningModal {
  fields = [lastName, company, email];

  connectedCallback() {
    const toastContainer = ToastContainer.instance();
    toastContainer.maxShown = 5;
    toastContainer.toastPosition = "top";
  }

  handleOkay() {
    this.template.querySelector("lightning-record-edit-form").submit();

    // const event = new ShowToastEvent({
    //     title: 'Submitted succesfully',
    //     message:'We will connect with you soon',
    //     variant: "success"
    // });
    // this.dispatchEvent(event);
    console.log("before closing modal");
    this.close("okay");
    Toast.show(
      {
        label: "Submitted succesful",

        message: "We will reach out to you soon!",
        mode: "sticky",
        variant: "success"
      },
      this
    );
  }
}
