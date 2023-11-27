import { LightningElement } from 'lwc';
import IMAGES from '@salesforce/resourceUrl/Images';

export default class HeroComponent extends LightningElement {

    imageURL = IMAGES + '/coder.jpg';
}