import Enzyme from 'enzyme';
import '@testing-library/jest-dom';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import registerIcons from "../src/js/registerIcons";

window.URL.createObjectURL = function () {};
registerIcons();

// In Enzyme 3, shallow now by default triggers life cycle methods :thumbs-up: but this ruins all our tests :thumbs-down:
Enzyme.configure({ adapter: new Adapter() });
