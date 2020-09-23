import Geocode from "react-geocode";
 
const getAddress = async (lat,lng)=>{
Geocode.setApiKey("AIzaSyA-HWQCU5CY_cgHHlXHTVslmvdBg_dxRgA");
let address = await Geocode.fromLatLng(lat, lng);
address = address.results[0].formatted_address
return address;
}
export default getAddress;