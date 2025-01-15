import { Link } from 'react-router-dom';
import "./site.css"
import useSound from 'use-sound';



const tone1 = "./Web_Tone-001.mp3"
const tone2 = "./Web_Tone-002.mp3"
const tone3 = "./Web_Tone-003.mp3"
const tone4 = "./Web_Tone-004.mp3"

function NavBar(){
  const audio1 = new Audio(tone1);
  const audio2 = new Audio(tone2);
  const audio3 = new Audio(tone3);
  const audio4 = new Audio(tone4);

  const handleClick1 = () => {
    audio1.play(); 
  };
  const handleClick2 = () => {
    audio2.play(); 
  };
  const handleClick3 = () => {
    audio3.play(); 
  };
  const handleClick4 = () => {
    audio4.play(); 
  };

  

return(
  
  <nav className = "nav">
<Link to = "/"   onClick={handleClick1} className='site-title'>
<svg width="155" height="40" viewBox="0 0 155 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.3112 30.0415C14.3108 30.0818 14.3106 30.1223 14.3106 30.1628C14.3106 30.4734 14.3217 30.7782 14.344 31.0772H20.5595C20.5036 30.7879 20.4756 30.4831 20.4756 30.1628C20.4756 30.1221 20.4761 30.0817 20.477 30.0415H14.3112Z" fill="#283841"></path>
<path d="M6.72774 30.0415V31.0772H0.830797V30.0415H6.72774Z" fill="#283841"></path>
<path d="M14.3663 28.9876H20.6221C20.7016 28.6858 20.8136 28.3985 20.9581 28.1257C20.9922 28.0664 21.0276 28.0085 21.0642 27.9518H14.5169C14.4508 28.2889 14.4006 28.6341 14.3663 28.9876Z" fill="#283841"></path>
<path d="M6.72774 27.9518V28.9876H0.830797V27.9518H6.72774Z" fill="#283841"></path>
<path d="M13.76 26.8979C13.5136 26.6625 13.1709 26.4821 12.7319 26.3567C12.2494 26.2316 11.5615 26.169 10.668 26.169H6.72774V26.8979H0.830797V25.8622H14.0721V26.8979H13.76Z" fill="#283841"></path>
<path d="M14.7836 26.8979H22.0879C22.173 26.8396 22.261 26.7842 22.3519 26.7318C22.9416 26.3924 23.6207 26.2226 24.3891 26.2226C25.1575 26.2226 25.8276 26.3924 26.3994 26.7318C26.4904 26.7842 26.5782 26.8396 26.6628 26.8979H33.9503C33.8727 26.6593 33.786 26.4253 33.6902 26.1958C33.6448 26.0832 33.5976 25.972 33.5486 25.8622H15.1808C15.1302 25.972 15.0814 26.0832 15.0344 26.1958C14.9419 26.4253 14.8583 26.6593 14.7836 26.8979Z" fill="#283841"></path>
<path d="M15.7464 24.8083H32.9955C32.7734 24.4443 32.5273 24.099 32.2572 23.7726H16.4925C16.2209 24.099 15.9722 24.4443 15.7464 24.8083Z" fill="#283841"></path>
<path d="M17.5303 22.7187H31.2276C30.7788 22.3289 30.2916 21.9836 29.7658 21.6829H18.9981C18.4744 21.9836 17.9852 22.3289 17.5303 22.7187Z" fill="#283841"></path>
<path d="M14.0721 21.6829V22.7187H0.723896C0.694231 22.5392 0.658379 22.3759 0.616361 22.2288C0.563376 22.0244 0.495936 21.8424 0.41408 21.6829H14.0721Z" fill="#283841"></path>
<path d="M40.6473 21.6829C40.6221 21.695 40.5969 21.7072 40.5717 21.7195C39.9862 22.0089 39.448 22.342 38.9569 22.7187H52.1406C52.1441 22.7071 52.1476 22.6957 52.1512 22.6845C52.2763 22.2913 52.4729 21.9875 52.7409 21.7731V21.6829H40.6473Z" fill="#283841"></path>
<path d="M57.6874 21.6829C57.1637 21.9836 56.6745 22.3289 56.2196 22.7187H69.917C69.4682 22.3289 68.9809 21.9836 68.4551 21.6829H57.6874Z" fill="#283841"></path>
<path d="M99.0129 21.6829H107.387C107.702 21.852 107.993 22.0429 108.26 22.2555C108.443 22.4027 108.612 22.5572 108.769 22.7187H99.0129V21.6829Z" fill="#283841"></path>
<path d="M82.2141 21.6829H88.9537C88.8713 21.8341 88.7976 22.0071 88.7326 22.202C88.6822 22.3532 88.6397 22.5254 88.6051 22.7187H82.5009C82.4749 22.5392 82.4435 22.3759 82.4068 22.2288C82.3538 22.0244 82.2895 21.8424 82.2141 21.6829Z" fill="#283841"></path>
<path d="M74.2168 21.6829H80.8744C80.7989 21.8424 80.7347 22.0244 80.6817 22.2288C80.6449 22.3759 80.6135 22.5392 80.5876 22.7187H74.5036C74.4776 22.5392 74.4463 22.3759 74.4095 22.2288C74.3565 22.0244 74.2923 21.8424 74.2168 21.6829Z" fill="#283841"></path>
<path d="M70.9465 23.7726H55.1818C54.9101 24.099 54.6615 24.4443 54.4357 24.8083H71.6848C71.4627 24.4443 71.2165 24.099 70.9465 23.7726Z" fill="#283841"></path>
<path d="M74.5971 24.8083V24.2927C74.5971 24.1113 74.5944 23.9379 74.5891 23.7726H80.5021C80.4968 23.9379 80.4941 24.1113 80.4941 24.2927V24.8083H74.5971Z" fill="#283841"></path>
<path d="M72.2378 25.8622H53.8701C53.8196 25.972 53.7707 26.0832 53.7237 26.1958C53.6312 26.4253 53.5476 26.6593 53.4729 26.8979H60.7772C60.8623 26.8396 60.9503 26.7842 61.0412 26.7318C61.6309 26.3924 62.31 26.2226 63.0784 26.2226C63.8468 26.2226 64.5169 26.3924 65.0887 26.7318C65.1797 26.7842 65.2675 26.8396 65.3521 26.8979H72.6395C72.5621 26.6593 72.4754 26.4253 72.3795 26.1958C72.3341 26.0832 72.2869 25.972 72.2378 25.8622Z" fill="#283841"></path>
<path d="M74.5971 26.8979V25.8622H80.4941V26.8979H74.5971Z" fill="#283841"></path>
<path d="M72.9161 27.9518H66.3547C66.3898 28.0085 66.4234 28.0664 66.4557 28.1257C66.6082 28.3985 66.7264 28.6858 66.8104 28.9876H73.0723C73.0367 28.6341 72.9846 28.2889 72.9161 27.9518Z" fill="#283841"></path>
<path d="M74.5971 28.9876V27.9518H80.4941V28.9876H74.5971Z" fill="#283841"></path>
<path d="M73.1294 30.0415H66.9635C66.9645 30.0817 66.965 30.1221 66.965 30.1628C66.965 30.4831 66.9355 30.7879 66.8765 31.0772H73.0954C73.1185 30.7782 73.13 30.4734 73.13 30.1628C73.13 30.1223 73.1298 30.0818 73.1294 30.0415Z" fill="#283841"></path>
<path d="M74.5971 31.0772V30.0415H80.4941V31.0772H74.5971Z" fill="#283841"></path>
<path d="M72.9624 32.1311H66.4943C66.4817 32.1542 66.4688 32.1771 66.4557 32.1999C66.2527 32.572 65.9964 32.8944 65.6868 33.1668H72.7201C72.8186 32.8304 72.8994 32.4853 72.9624 32.1311Z" fill="#283841"></path>
<path d="M74.5971 33.1668V32.1311H80.4941V33.1668H74.5971Z" fill="#283841"></path>
<path d="M72.3423 34.2207H53.7622C53.9166 34.5808 54.0892 34.9259 54.2797 35.2565H71.8382C72.025 34.9259 72.1931 34.5808 72.3423 34.2207Z" fill="#283841"></path>
<path d="M74.5971 35.2565V34.2207H80.4941V35.2565H74.5971Z" fill="#283841"></path>
<path d="M71.1402 36.3104H54.9868C55.2408 36.6378 55.5167 36.9474 55.8144 37.2392C55.8518 37.2752 55.8896 37.3108 55.9275 37.3461H70.2046C70.2418 37.3108 70.2788 37.2752 70.3155 37.2392C70.6133 36.9474 70.8881 36.6378 71.1402 36.3104Z" fill="#283841"></path>
<path d="M74.5353 37.3461C74.5688 37.0434 74.5886 36.6982 74.5949 36.3104H80.4962C80.5025 36.6982 80.5224 37.0434 80.5558 37.3461H74.5353Z" fill="#283841"></path>
<path d="M68.8561 38.4H57.2873C57.8212 38.7417 58.3935 39.0338 59.0041 39.2763C60.2371 39.7588 61.5952 40 63.0784 40C64.5437 40 65.8928 39.7588 67.1258 39.2763C67.7455 39.0338 68.3222 38.7417 68.8561 38.4Z" fill="#283841"></path>
<path d="M50.6502 37.3461V36.3104H37.5705C37.8863 36.6846 38.2348 37.0298 38.6162 37.3461H50.6502Z" fill="#283841"></path>
<path d="M40.2065 38.4H50.6502V39.7588C50.257 39.6337 49.8639 39.5712 49.4708 39.5712C49.2027 39.5712 48.8185 39.6069 48.3182 39.6784C47.8357 39.7498 47.2728 39.7856 46.6295 39.7856C44.3243 39.7856 42.3408 39.4014 40.6789 38.633C40.5178 38.5586 40.3604 38.4809 40.2065 38.4Z" fill="#283841"></path>
<path d="M31.5152 37.3461C31.5525 37.3108 31.5895 37.2752 31.6262 37.2392C31.9239 36.9474 32.1988 36.6378 32.4509 36.3104H16.2975C16.5515 36.6378 16.8274 36.9474 17.1251 37.2392C17.1625 37.2752 17.2002 37.3108 17.2382 37.3461H31.5152Z" fill="#283841"></path>
<path d="M18.598 38.4H30.1667C29.6329 38.7417 29.0561 39.0338 28.4365 39.2763C27.2035 39.7588 25.8544 40 24.3891 40C22.9059 40 21.5478 39.7588 20.3148 39.2763C19.7042 39.0338 19.1319 38.7417 18.598 38.4Z" fill="#283841"></path>
<path d="M6.80124 37.3461C6.76147 37.0439 6.73785 36.6986 6.73035 36.3104H0.828596C0.82229 36.6982 0.802441 37.0434 0.769028 37.3461H6.80124Z" fill="#283841"></path>
<path d="M0.544855 38.4H7.07313C7.21871 38.7417 7.39845 38.9981 7.61229 39.1691V39.4104H0.0802698V39.1691C0.271783 38.9913 0.426652 38.7349 0.544855 38.4Z" fill="#283841"></path>
<path d="M0.830797 35.2565H6.72774V34.2207H0.830797V35.2565Z" fill="#283841"></path>
<path d="M0.830797 33.1668H6.72774V32.1311H0.830797V33.1668Z" fill="#283841"></path>
<path d="M14.4723 32.1311C14.533 32.4853 14.6109 32.8304 14.7059 33.1668H21.7502C21.4364 32.8944 21.1723 32.572 20.9581 32.1999C20.9457 32.1771 20.9335 32.1542 20.9215 32.1311H14.4723Z" fill="#283841"></path>
<path d="M27.8051 32.1311C27.7924 32.1542 27.7795 32.1771 27.7664 32.1999C27.5635 32.572 27.3071 32.8944 26.9974 33.1668H34.0308C34.1293 32.8304 34.2101 32.4853 34.2731 32.1311H27.8051Z" fill="#283841"></path>
<path d="M35.6749 32.1311C35.7365 32.4878 35.8149 32.833 35.91 33.1668H43.0693C42.7441 32.9163 42.4744 32.6209 42.2604 32.2804C42.2296 32.2314 42.2 32.1816 42.1716 32.1311H35.6749Z" fill="#283841"></path>
<path d="M41.7772 31.0772H35.5445C35.5186 30.7455 35.5057 30.405 35.5057 30.0557C35.5057 30.0509 35.5057 30.0462 35.5057 30.0415H41.6707C41.6715 30.4088 41.707 30.7541 41.7772 31.0772Z" fill="#283841"></path>
<path d="M52.6096 31.0772H45.8411C46.0307 30.8466 46.1774 30.524 46.2811 30.1093C46.2868 30.0871 46.2924 30.0645 46.2979 30.0415H52.1343C52.1398 30.0645 52.1454 30.0871 52.1512 30.1093C52.2549 30.524 52.4077 30.8466 52.6096 31.0772Z" fill="#283841"></path>
<path d="M53.1616 32.1311C53.2223 32.4853 53.3002 32.8304 53.3952 33.1668H60.4395C60.1257 32.8944 59.8617 32.572 59.6474 32.1999C59.635 32.1771 59.6228 32.1542 59.6108 32.1311H53.1616Z" fill="#283841"></path>
<path d="M59.2488 31.0772H53.0332C53.011 30.7782 52.9999 30.4734 52.9999 30.1628C52.9999 30.1223 53.0001 30.0818 53.0005 30.0415H59.1664C59.1654 30.0817 59.1649 30.1221 59.1649 30.1628C59.1649 30.4831 59.1929 30.7879 59.2488 31.0772Z" fill="#283841"></path>
<path d="M59.3113 28.9876C59.3909 28.6858 59.503 28.3985 59.6474 28.1257C59.6815 28.0664 59.7169 28.0085 59.7535 27.9518H53.2062C53.1401 28.2889 53.0899 28.6341 53.0556 28.9876H59.3113Z" fill="#283841"></path>
<path d="M51.9915 28.9876C51.9729 28.7041 51.9636 28.39 51.9636 28.0453V27.9518H46.4687V28.0453C46.4687 28.39 46.4594 28.7041 46.4408 28.9876H51.9915Z" fill="#283841"></path>
<path d="M41.7774 28.9876C41.8577 28.6173 41.9835 28.2721 42.1548 27.9518H35.7049C35.6378 28.2879 35.5877 28.6332 35.5545 28.9876H41.7774Z" fill="#283841"></path>
<path d="M34.383 28.9876C34.3474 28.6341 34.2953 28.2889 34.2268 27.9518H27.6655C27.7005 28.0085 27.7341 28.0664 27.7664 28.1257C27.9189 28.3985 28.0371 28.6858 28.1211 28.9876H34.383Z" fill="#283841"></path>
<path d="M28.2742 30.0415C28.2752 30.0817 28.2757 30.1221 28.2757 30.1628C28.2757 30.4831 28.2462 30.7879 28.1872 31.0772H34.4061C34.4292 30.7782 34.4407 30.4734 34.4407 30.1628C34.4407 30.1223 34.4405 30.0818 34.4401 30.0415H28.2742Z" fill="#283841"></path>
<path d="M35.9805 26.8979H43.05C43.2652 26.7237 43.5024 26.5701 43.7614 26.4371C44.4405 26.1154 45.2357 25.9546 46.1471 25.9546C46.255 25.9546 46.3622 25.9557 46.4687 25.9579V26.8979H51.9636V25.8622H36.3956C36.2356 26.1958 36.0973 26.5411 35.9805 26.8979Z" fill="#283841"></path>
<path d="M36.9979 24.8083H51.9636V24.5339C51.9636 24.2556 51.9705 24.0018 51.9842 23.7726H37.8081C37.5138 24.0955 37.2437 24.4407 36.9979 24.8083Z" fill="#283841"></path>
<path d="M50.6502 34.2207H36.2824C36.4366 34.5815 36.6136 34.9268 36.8136 35.2565H50.6502V34.2207Z" fill="#283841"></path>
<path d="M33.1488 35.2565C33.3357 34.9259 33.5038 34.5808 33.653 34.2207H15.0728C15.2273 34.5808 15.3999 34.9259 15.5904 35.2565H33.1488Z" fill="#283841"></path>
<path d="M74.3112 38.4H80.78C80.8982 38.7349 81.0531 38.9913 81.2446 39.1691V39.4104H73.8466V39.1691C74.0381 38.9913 74.193 38.7349 74.3112 38.4Z" fill="#283841"></path>
<path d="M82.2787 38.4C82.1541 38.7349 81.9824 38.9913 81.7635 39.1691V39.4104H90.3677C91.9759 39.4104 93.3519 39.1512 94.4956 38.633C94.6649 38.5601 94.8285 38.4824 94.9864 38.4H82.2787Z" fill="#283841"></path>
<path d="M100.836 38.4C102.075 39.2165 103.736 39.6247 105.821 39.6247C106.304 39.6247 106.741 39.5979 107.135 39.5443C107.528 39.4907 107.823 39.4639 108.019 39.4639C108.323 39.4639 108.654 39.5265 109.011 39.6516V38.4H100.836Z" fill="#283841"></path>
<path d="M109.011 37.3461H99.6536C99.3939 37.0279 99.1827 36.6827 99.0199 36.3104H109.011V37.3461Z" fill="#283841"></path>
<path d="M110.89 38.4C110.772 38.7349 110.617 38.9913 110.425 39.1691V39.4104H117.797V39.1691C117.605 38.9913 117.45 38.7349 117.332 38.4H110.89Z" fill="#283841"></path>
<path d="M117.126 37.3461H111.114C111.148 37.0434 111.167 36.6982 111.174 36.3104H117.075C117.08 36.6982 117.097 37.0434 117.126 37.3461Z" fill="#283841"></path>
<path d="M120.308 38.4C120.197 38.7349 120.039 38.9913 119.834 39.1691V39.4104H127.232V39.1691C127.027 38.9913 126.863 38.7349 126.742 38.4H120.308Z" fill="#283841"></path>
<path d="M126.516 37.3461H120.522C120.556 37.0434 120.576 36.6982 120.582 36.3104H126.457C126.463 36.6982 126.483 37.0434 126.516 37.3461Z" fill="#283841"></path>
<path d="M128.083 38.4C127.945 38.7377 127.762 38.994 127.533 39.1691V39.4104H133.993V39.2227C133.84 38.9524 133.756 38.6781 133.743 38.4H128.083Z" fill="#283841"></path>
<path d="M134.038 37.3461H128.335C128.373 37.0452 128.398 36.7 128.409 36.3104H134.958L134.582 36.6763C134.354 36.9042 134.173 37.1275 134.038 37.3461Z" fill="#283841"></path>
<path d="M142.415 38.4C142.397 38.6778 142.314 38.952 142.168 39.2227V39.4104H148.547V39.1691C148.332 38.994 148.152 38.7377 148.007 38.4H142.415Z" fill="#283841"></path>
<path d="M147.745 37.3461H142.162C142.024 37.105 141.829 36.8638 141.578 36.6227L141.267 36.3104H147.67C147.682 36.7 147.707 37.0452 147.745 37.3461Z" fill="#283841"></path>
<path d="M147.663 35.2565V34.2207H139.189L140.219 35.2565H147.663Z" fill="#283841"></path>
<path d="M136.038 35.2565L137.101 34.2207H128.417V35.2565H136.038Z" fill="#283841"></path>
<path d="M126.454 35.2565V34.2207H120.584V35.2565H126.454Z" fill="#283841"></path>
<path d="M117.073 35.2565V34.2207H111.176V35.2565H117.073Z" fill="#283841"></path>
<path d="M109.011 35.2565V34.2207H108.317C108.26 34.2612 108.201 34.2989 108.141 34.3338C108.067 34.3774 107.991 34.4166 107.912 34.4515C107.816 34.4928 107.704 34.5287 107.576 34.5593C107.562 34.5627 107.547 34.566 107.533 34.5693C107.508 34.5749 107.482 34.5803 107.456 34.5855C107.295 34.6391 107.117 34.6659 106.92 34.6659C106.509 34.6659 106.188 34.5677 105.955 34.3711C105.899 34.3231 105.849 34.273 105.806 34.2207H98.6108C98.6114 34.5825 98.6417 34.9278 98.7016 35.2565H109.011Z" fill="#283841"></path>
<path d="M97.775 35.2565C97.8883 34.9291 97.9733 34.5838 98.0298 34.2207H91.2174C90.8598 34.3925 90.4068 34.4784 89.8584 34.4784H88.4913V34.2207H82.5944V35.2565H97.775Z" fill="#283841"></path>
<path d="M82.5919 36.3104C82.5847 36.6982 82.562 37.0434 82.5238 37.3461H96.4495C96.7223 37.0769 96.9644 36.7821 97.1759 36.4619C97.2095 36.4119 97.2423 36.3614 97.2741 36.3104H82.5919Z" fill="#283841"></path>
<path d="M82.5944 33.1668H88.4913V32.1311H82.5944V33.1668Z" fill="#283841"></path>
<path d="M82.5944 31.0772H88.4913V30.0415H82.5944V31.0772Z" fill="#283841"></path>
<path d="M82.5944 28.9876H96.8499C96.58 28.6226 96.265 28.2774 95.9051 27.9518H82.5944V28.9876Z" fill="#283841"></path>
<path d="M82.5944 26.8979H94.4595C93.8083 26.5172 93.0616 26.1719 92.2192 25.8622H82.5944V26.8979Z" fill="#283841"></path>
<path d="M82.5944 24.8083H88.7377L88.4913 24.7375V24.2927C88.4913 24.1108 88.4945 23.9374 88.5009 23.7726H82.5864C82.5918 23.9379 82.5944 24.1113 82.5944 24.2927V24.8083Z" fill="#283841"></path>
<path d="M99.0129 23.7726V24.8083H109.987C109.88 24.4422 109.737 24.097 109.556 23.7726H99.0129Z" fill="#283841"></path>
<path d="M112.049 23.7726C111.873 24.0975 111.724 24.4428 111.602 24.8083H126.029C125.906 24.4428 125.757 24.0975 125.581 23.7726H112.049Z" fill="#283841"></path>
<path d="M128.409 23.7726C128.415 23.9379 128.417 24.1113 128.417 24.2927V24.8083H134.153V24.2927C134.153 24.1113 134.156 23.9379 134.161 23.7726H128.409Z" fill="#283841"></path>
<path d="M134.247 22.7187H128.324C128.298 22.5392 128.266 22.3759 128.23 22.2288C128.177 22.0244 128.112 21.8424 128.037 21.6829H134.534C134.458 21.8424 134.394 22.0244 134.341 22.2288C134.304 22.3759 134.273 22.5392 134.247 22.7187Z" fill="#283841"></path>
<path d="M141.945 23.7726C141.951 23.9379 141.953 24.1113 141.953 24.2927V24.8083H147.663V24.2927C147.663 24.1113 147.665 23.9379 147.671 23.7726H141.945Z" fill="#283841"></path>
<path d="M147.756 22.7187H141.86C141.834 22.5392 141.803 22.3759 141.766 22.2288C141.713 22.0244 141.647 21.8424 141.568 21.6829H148.048C147.969 21.8424 147.903 22.0244 147.85 22.2288C147.814 22.3759 147.782 22.5392 147.756 22.7187Z" fill="#283841"></path>
<path d="M123.763 21.6829H113.877C113.46 21.9841 113.088 22.3293 112.762 22.7187H124.88C124.556 22.3293 124.184 21.9841 123.763 21.6829Z" fill="#283841"></path>
<path d="M147.663 25.8622H141.953V26.8979H147.663V25.8622Z" fill="#283841"></path>
<path d="M147.663 27.9518H141.953V28.9876H147.663V27.9518Z" fill="#283841"></path>
<path d="M147.663 30.0415H141.953V30.1511L141.842 30.0415H128.417V31.0772H147.663V30.0415Z" fill="#283841"></path>
<path d="M147.663 32.1311H128.417V33.1668H147.663V32.1311Z" fill="#283841"></path>
<path d="M126.454 33.1668V32.1311H120.584V33.1668H126.454Z" fill="#283841"></path>
<path d="M117.073 33.1668V32.1311H111.176V33.1668H117.073Z" fill="#283841"></path>
<path d="M105.729 33.1668C105.762 33.1022 105.802 33.039 105.848 32.9773C106.027 32.7807 106.313 32.5216 106.706 32.1999L106.799 32.1311H99.0321C98.889 32.468 98.7823 32.8133 98.7121 33.1668H105.729Z" fill="#283841"></path>
<path d="M98.1137 33.1668C98.114 33.1395 98.1141 33.112 98.1141 33.0845C98.1141 32.7572 98.0963 32.4394 98.0606 32.1311H92.0999C92.1423 32.3042 92.1636 32.488 92.1636 32.6824C92.1636 32.8563 92.1454 33.0178 92.1091 33.1668H98.1137Z" fill="#283841"></path>
<path d="M91.4394 31.0772H97.8591C97.7609 30.7169 97.6343 30.3716 97.4794 30.0415H89.0802L89.2419 30.0825C90.2407 30.3453 90.9732 30.677 91.4394 31.0772Z" fill="#283841"></path>
<path d="M100.579 30.0415C100.214 30.3645 99.898 30.7097 99.6314 31.0772H108.124C108.436 30.7849 108.714 30.4802 108.957 30.1628C108.988 30.1226 109.018 30.0822 109.048 30.0415H100.579Z" fill="#283841"></path>
<path d="M111.176 30.0415V31.0772H117.073V30.0415H111.176Z" fill="#283841"></path>
<path d="M117.073 28.9876H111.176V27.9518H117.082C117.076 28.0423 117.073 28.1359 117.073 28.2329V28.9876Z" fill="#283841"></path>
<path d="M120.584 30.0415V31.0772H126.454V30.0415H120.584Z" fill="#283841"></path>
<path d="M126.454 28.9876H120.584V28.2329C120.584 28.1359 120.581 28.0423 120.575 27.9518H126.454V28.9876Z" fill="#283841"></path>
<path d="M128.417 28.9876H134.153V27.9518H128.417V28.9876Z" fill="#283841"></path>
<path d="M128.417 26.8979H134.153V25.8622H128.417V26.8979Z" fill="#283841"></path>
<path d="M126.299 25.8622H111.332C111.27 26.1937 111.227 26.5389 111.202 26.8979H117.355C117.399 26.819 117.448 26.7458 117.502 26.6783C117.806 26.3209 118.243 26.1422 118.815 26.1422C119.387 26.1422 119.825 26.3209 120.129 26.6783C120.186 26.7458 120.238 26.819 120.284 26.8979H126.428C126.403 26.5389 126.36 26.1937 126.299 25.8622Z" fill="#283841"></path>
<path d="M110.206 26.8979C110.213 26.7724 110.217 26.6455 110.217 26.5174C110.217 26.2933 110.207 26.0748 110.186 25.8622H102.631C102.75 25.9162 102.857 25.9828 102.953 26.0618C103.245 26.2889 103.405 26.5677 103.432 26.8979H110.206Z" fill="#283841"></path>
<path d="M103.092 27.9518C103.082 27.9652 103.071 27.9784 103.06 27.9916C102.85 28.2475 102.48 28.5796 101.953 28.9876H109.674C109.757 28.8108 109.831 28.6306 109.895 28.4473C109.953 28.2847 110.003 28.1196 110.045 27.9518H103.092Z" fill="#283841"></path>
<path d="M100.618 25.8622H99.0129V26.7855H99.2273L99.6294 26.3834C99.7723 26.2762 99.9242 26.1868 100.085 26.1154C100.247 26.0208 100.425 25.9364 100.618 25.8622Z" fill="#283841"></path>
<path d="M136.313 27.9518L135.132 28.9876H140.769L139.715 27.9518H136.313Z" fill="#283841"></path>
<path d="M138.643 26.8979H137.514L138.04 26.4371H138.174L138.643 26.8979Z" fill="#283841"></path>
<path d="M0.821596 23.7726H14.0721V24.8083H0.830797V24.2927C0.830797 24.1113 0.827743 23.9379 0.821596 23.7726Z" fill="#283841"></path>
<path d="M152.234 0C151.9 0 151.594 0.056383 151.317 0.169149C151.035 0.277578 150.79 0.433715 150.582 0.637561C150.374 0.83707 150.213 1.07344 150.1 1.34668C149.988 1.61993 149.931 1.91919 149.931 2.24447C149.931 2.56976 149.988 2.86902 150.1 3.14226C150.213 3.4155 150.374 3.65405 150.582 3.85789C150.79 4.0574 151.035 4.21354 151.317 4.32631C151.594 4.43473 151.9 4.48895 152.234 4.48895C152.564 4.48895 152.87 4.43473 153.152 4.32631C153.433 4.21354 153.678 4.0574 153.887 3.85789C154.095 3.65405 154.255 3.4155 154.368 3.14226C154.481 2.86902 154.537 2.56976 154.537 2.24447C154.537 1.91919 154.481 1.61993 154.368 1.34668C154.255 1.07344 154.095 0.83707 153.887 0.637561C153.678 0.433715 153.433 0.277578 153.152 0.169149C152.87 0.056383 152.564 0 152.234 0ZM151.375 3.65622C151.128 3.52176 150.937 3.3331 150.803 3.09022C150.668 2.84734 150.601 2.56542 150.601 2.24447C150.601 1.91919 150.668 1.63727 150.803 1.39873C150.937 1.15585 151.128 0.967184 151.375 0.832733C151.618 0.698281 151.905 0.631055 152.234 0.631055C152.559 0.631055 152.846 0.698281 153.093 0.832733C153.336 0.967184 153.527 1.15585 153.665 1.39873C153.8 1.63727 153.867 1.91919 153.867 2.24447C153.867 2.56542 153.8 2.84734 153.665 3.09022C153.527 3.3331 153.336 3.52176 153.093 3.65622C152.846 3.79067 152.559 3.85789 152.234 3.85789C151.905 3.85789 151.618 3.79067 151.375 3.65622ZM151.551 1.86714H151.597C151.627 1.83245 151.67 1.80425 151.727 1.78257C151.766 1.76956 151.813 1.76305 151.87 1.76305C151.948 1.76305 152.02 1.78257 152.085 1.8216C152.145 1.86064 152.193 1.91268 152.228 1.97774C152.262 2.0428 152.28 2.1187 152.28 2.20544C152.28 2.34423 152.243 2.457 152.169 2.54374C152.091 2.63048 151.989 2.67385 151.863 2.67385C151.798 2.67385 151.742 2.66084 151.694 2.63482C151.673 2.62181 151.653 2.6088 151.636 2.59578C151.614 2.57844 151.599 2.56326 151.59 2.55024H151.545V3.43502C151.584 3.45237 151.638 3.46538 151.707 3.47406C151.772 3.48273 151.842 3.48707 151.915 3.48707C152.184 3.48707 152.423 3.43502 152.631 3.33093C152.835 3.2225 152.995 3.07287 153.112 2.88204C153.23 2.68686 153.288 2.4635 153.288 2.21195C153.288 1.96473 153.234 1.7457 153.125 1.55487C153.017 1.36403 152.865 1.21657 152.67 1.11248C152.475 1.00405 152.254 0.949836 152.006 0.949836C151.946 0.949836 151.894 0.952004 151.85 0.956341C151.807 0.960678 151.768 0.962847 151.733 0.962847C151.668 0.962847 151.607 0.956341 151.551 0.94333V1.86714Z" fill="#283841"></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.0345 15.635C14.552 14.4377 14.3108 13.1154 14.3108 11.6679C14.3108 10.2205 14.552 8.89814 15.0345 7.70088C15.5348 6.50362 16.2318 5.46719 17.1252 4.59158C18.0366 3.71597 19.0998 3.03693 20.3149 2.55445C21.5479 2.07198 22.906 1.83074 24.3892 1.83074C25.8545 1.83074 27.2037 2.07198 28.4367 2.55445C29.6697 3.03693 30.7329 3.71597 31.6264 4.59158C32.5198 5.46719 33.2078 6.50362 33.6903 7.70088C34.1906 8.89814 34.4408 10.2205 34.4408 11.6679C34.4408 13.1154 34.1906 14.4377 33.6903 15.635C33.2078 16.8322 32.5198 17.8686 31.6264 18.7443C30.7329 19.6199 29.6697 20.2989 28.4367 20.7814C27.2037 21.2639 25.8545 21.5051 24.3892 21.5051C22.906 21.5051 21.5479 21.2639 20.3149 20.7814C19.0998 20.2989 18.0366 19.6199 17.1252 18.7443C16.2318 17.8686 15.5348 16.8322 15.0345 15.635ZM28.2758 11.6679C28.2758 10.8995 28.1061 10.2205 27.7665 9.63079C27.4449 9.0411 26.9892 8.57649 26.3995 8.23697C25.8277 7.89745 25.1576 7.72769 24.3892 7.72769C23.6208 7.72769 22.9418 7.89745 22.3521 8.23697C21.7624 8.57649 21.2978 9.0411 20.9582 9.63079C20.6366 10.2205 20.4758 10.8995 20.4758 11.6679C20.4758 12.4184 20.6366 13.0975 20.9582 13.705C21.2978 14.2947 21.7624 14.7593 22.3521 15.0989C22.9418 15.4384 23.6208 15.6082 24.3892 15.6082C25.1576 15.6082 25.8277 15.4384 26.3995 15.0989C26.9892 14.7593 27.4449 14.2947 27.7665 13.705C28.1061 13.0975 28.2758 12.4184 28.2758 11.6679Z" fill="#283841"></path>
<path d="M10.6681 15.6618H6.72788V5.79778C6.72788 4.88643 6.80829 4.18952 6.96912 3.70704C7.12995 3.22456 7.34438 2.87611 7.61242 2.66167V2.42043H0.0804129V2.66167C0.330586 2.89398 0.518217 3.2603 0.643303 3.76065C0.76839 4.24313 0.830934 4.92217 0.830934 5.79778V17.5381C0.830934 18.4137 0.759455 19.1016 0.616499 19.602C0.491412 20.0845 0.285913 20.4419 0 20.6742V20.9154H11.7403C12.1692 20.9154 12.5891 20.9333 13.0001 20.969C13.4111 21.0048 13.7685 21.0673 14.0723 21.1566V14.8308H13.8578C13.6077 15.1167 13.2324 15.3312 12.732 15.4741C12.2496 15.5992 11.5616 15.6618 10.6681 15.6618Z" fill="#283841"></path>
<path d="M46.2812 11.7215C46.4063 12.204 46.4688 12.892 46.4688 13.7855V15.8729C46.3623 15.8751 46.2551 15.8762 46.1472 15.8762C45.2358 15.8762 44.4406 15.7154 43.7616 15.3937C43.1004 15.0542 42.5822 14.5807 42.2069 13.9731C41.8496 13.3477 41.6709 12.6239 41.6709 11.8019C41.6709 10.9263 41.8674 10.1758 42.2606 9.55038C42.6537 8.92494 43.2344 8.4514 44.0028 8.12975C44.7891 7.79023 45.7451 7.62047 46.8709 7.62047C47.3355 7.62047 47.7465 7.64727 48.1039 7.70088C48.4791 7.75449 48.8187 7.8349 49.1225 7.94212C49.3548 8.0136 49.5781 8.11188 49.7926 8.23697C50.0249 8.34419 50.2304 8.47821 50.4091 8.63903H50.6503V2.07198C50.2572 2.19706 49.864 2.25961 49.4709 2.25961C49.2029 2.25961 48.8187 2.22387 48.3183 2.15239C47.8358 2.08091 47.273 2.04517 46.6297 2.04517C44.3245 2.04517 42.341 2.42937 40.6791 3.19776C39.0172 3.96615 37.7396 5.07406 36.8461 6.52149C35.9526 7.96892 35.5059 9.72014 35.5059 11.7751C35.5059 13.6872 35.9526 15.358 36.8461 16.7875C37.7396 18.2171 38.9815 19.325 40.5719 20.1113C42.1801 20.8975 44.0475 21.2907 46.174 21.2907C47.3355 21.2907 48.4792 21.2103 49.6049 21.0494C50.7307 20.8886 51.7761 20.6384 52.741 20.2989V20.0577C52.473 19.8432 52.2764 19.5395 52.1513 19.1463C52.0263 18.7532 51.9637 18.1367 51.9637 17.2968V13.7855C51.9637 12.892 52.0263 12.204 52.1513 11.7215C52.2764 11.2212 52.473 10.8549 52.741 10.6226V10.3813H45.7183V10.6226C45.9685 10.8549 46.1561 11.2212 46.2812 11.7215Z" fill="#283841"></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M53.7238 15.635C53.2413 14.4377 53.0001 13.1154 53.0001 11.6679C53.0001 10.2205 53.2413 8.89814 53.7238 7.70088C54.2241 6.50362 54.9211 5.46719 55.8145 4.59158C56.7259 3.71597 57.7891 3.03693 59.0042 2.55445C60.2372 2.07198 61.5953 1.83074 63.0785 1.83074C64.5438 1.83074 65.893 2.07198 67.126 2.55445C68.3589 3.03693 69.4222 3.71597 70.3157 4.59158C71.2091 5.46719 71.8971 6.50362 72.3796 7.70088C72.8799 8.89814 73.1301 10.2205 73.1301 11.6679C73.1301 13.1154 72.8799 14.4377 72.3796 15.635C71.8971 16.8322 71.2091 17.8686 70.3157 18.7443C69.4222 19.6199 68.3589 20.2989 67.126 20.7814C65.893 21.2639 64.5438 21.5051 63.0785 21.5051C61.5953 21.5051 60.2372 21.2639 59.0042 20.7814C57.7891 20.2989 56.7259 19.6199 55.8145 18.7443C54.9211 17.8686 54.2241 16.8322 53.7238 15.635ZM66.9651 11.6679C66.9651 10.8995 66.7954 10.2205 66.4558 9.63079C66.1342 9.0411 65.6785 8.57649 65.0888 8.23697C64.517 7.89745 63.8469 7.72769 63.0785 7.72769C62.3101 7.72769 61.6311 7.89745 61.0414 8.23697C60.4517 8.57649 59.9871 9.0411 59.6475 9.63079C59.3259 10.2205 59.1651 10.8995 59.1651 11.6679C59.1651 12.4184 59.3259 13.0975 59.6475 13.705C59.9871 14.2947 60.4517 14.7593 61.0414 15.0989C61.6311 15.4384 62.3101 15.6082 63.0785 15.6082C63.8469 15.6082 64.517 15.4384 65.0888 15.0989C65.6785 14.7593 66.1342 14.2947 66.4558 13.705C66.7954 13.0975 66.9651 12.4184 66.9651 11.6679Z" fill="#283841"></path>
<path d="M74.4096 3.76065C74.5347 4.24313 74.5972 4.92217 74.5972 5.79778V17.5381C74.5972 18.4137 74.5347 19.1016 74.4096 19.602C74.2845 20.0845 74.0969 20.4419 73.8467 20.6742V20.9154H81.2447V20.6742C80.9945 20.4419 80.8069 20.0845 80.6818 19.602C80.5567 19.1016 80.4942 18.4137 80.4942 17.5381V5.79778C80.4942 4.92217 80.5567 4.24313 80.6818 3.76065C80.8069 3.2603 80.9945 2.89398 81.2447 2.66167V2.42043H73.8467V2.66167C74.0969 2.89398 74.2845 3.2603 74.4096 3.76065Z" fill="#283841"></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M88.7327 19.6288C88.8936 20.1113 89.108 20.4597 89.376 20.6742V20.9154H81.844V20.6742C82.0942 20.4419 82.2818 20.0845 82.4069 19.602C82.532 19.1016 82.5946 18.4137 82.5946 17.5381V5.79778C82.5946 4.92217 82.5231 4.24313 82.3801 3.76065C82.255 3.2603 82.0495 2.89398 81.7636 2.66167V2.42043H90.3678C91.9761 2.42043 93.352 2.67954 94.4957 3.19776C95.6572 3.69811 96.5507 4.42182 97.1761 5.36891C97.8015 6.29812 98.1142 7.4239 98.1142 8.74625C98.1142 10.015 97.8462 11.1408 97.3101 12.1236C96.774 13.1064 95.952 13.9642 94.8441 14.6968C93.7362 15.4116 92.3156 16.0102 90.5822 16.4927L88.4915 17.0932V17.5381C88.4915 18.4494 88.5719 19.1463 88.7327 19.6288ZM89.242 11.7483L88.4915 11.9387V7.35243H89.8585C90.609 7.35243 91.1809 7.51325 91.574 7.8349C91.9671 8.13869 92.1637 8.57649 92.1637 9.14832C92.1637 9.79162 91.9314 10.3188 91.4668 10.7298C91.0022 11.1408 90.2606 11.4803 89.242 11.7483Z" fill="#283841"></path>
<path d="M108.797 7.96893H109.011V2.17919C108.654 2.30428 108.323 2.36682 108.019 2.36682C107.823 2.36682 107.528 2.34002 107.135 2.28641C106.742 2.2328 106.304 2.206 105.821 2.206C103.534 2.206 101.756 2.69741 100.487 3.68024C99.2364 4.64519 98.611 5.9586 98.611 7.62047C98.611 8.47821 98.8075 9.29127 99.2007 10.0597C99.5938 10.8102 100.166 11.4803 100.916 12.07L101.64 12.6061C102.337 13.1243 102.81 13.5353 103.06 13.8391C103.311 14.1429 103.436 14.4734 103.436 14.8308C103.436 15.2061 103.275 15.5188 102.953 15.769C102.649 16.0192 102.23 16.1442 101.693 16.1442C101.39 16.1442 101.095 16.1085 100.809 16.037C100.541 15.9477 100.3 15.8405 100.085 15.7154C99.9244 15.6439 99.7725 15.5545 99.6295 15.4473L99.2275 15.0453H99.013V20.701C99.3704 20.8261 99.8976 20.9243 100.594 20.9958C101.309 21.0852 102.006 21.1298 102.685 21.1298C105.098 21.1298 106.956 20.6116 108.261 19.5752C109.565 18.5209 110.217 17.1003 110.217 15.3133C110.217 14.6343 110.11 13.991 109.896 13.3834C109.681 12.7758 109.368 12.204 108.957 11.6679C108.546 11.1318 108.037 10.6315 107.43 10.1669L106.706 9.63079C106.313 9.30914 106.027 9.05003 105.848 8.85347C105.687 8.63903 105.607 8.40673 105.607 8.15656C105.607 7.88851 105.723 7.65621 105.955 7.45964C106.188 7.26308 106.509 7.1648 106.92 7.1648C107.117 7.1648 107.296 7.1916 107.456 7.24521C107.635 7.28095 107.787 7.32562 107.912 7.37923C108.073 7.45071 108.225 7.54006 108.368 7.64727C108.529 7.73662 108.672 7.84384 108.797 7.96893Z" fill="#283841"></path>
<path d="M111.176 5.79778C111.176 4.92217 111.114 4.24313 110.988 3.76065C110.863 3.2603 110.676 2.89398 110.426 2.66167V2.42043H117.797V2.66167C117.547 2.89398 117.359 3.2603 117.234 3.76065C117.127 4.24313 117.073 4.92217 117.073 5.79778V13.5978C117.073 14.2769 117.216 14.7951 117.502 15.1525C117.806 15.5099 118.244 15.6886 118.815 15.6886C119.387 15.6886 119.825 15.5099 120.129 15.1525C120.433 14.7951 120.584 14.2769 120.584 13.5978V5.79778C120.584 4.92217 120.522 4.24313 120.397 3.76065C120.29 3.2603 120.102 2.89398 119.834 2.66167V2.42043H127.232V2.66167C126.964 2.89398 126.767 3.2603 126.642 3.76065C126.517 4.24313 126.455 4.92217 126.455 5.79778V14.1607C126.455 15.7154 126.151 17.0377 125.543 18.1278C124.954 19.2178 124.087 20.0577 122.943 20.6474C121.817 21.2192 120.441 21.5051 118.815 21.5051C117.207 21.5051 115.831 21.2192 114.687 20.6474C113.562 20.0577 112.695 19.2178 112.087 18.1278C111.48 17.0377 111.176 15.7154 111.176 14.1607V5.79778Z" fill="#283841"></path>
<path d="M128.203 3.78745C128.346 4.30567 128.417 5.06513 128.417 6.06582V17.5381C128.417 18.4137 128.355 19.1016 128.23 19.602C128.105 20.0845 127.917 20.4419 127.667 20.6742V20.9154H134.904V20.6742C134.654 20.4419 134.466 20.0845 134.341 19.602C134.216 19.1016 134.153 18.4137 134.153 17.5381V11.9852L138.04 15.3937H138.174L141.954 11.6798V17.5381C141.954 18.4137 141.891 19.1016 141.766 19.602C141.641 20.0845 141.444 20.4419 141.176 20.6742V20.9154H148.44V20.6742C148.172 20.4419 147.976 20.0845 147.85 19.602C147.725 19.1016 147.663 18.4137 147.663 17.5381V6.06582C147.663 5.06513 147.734 4.30567 147.877 3.78745C148.038 3.26924 148.261 2.89398 148.547 2.66167V2.42043H142.168V2.60806C142.4 3.03693 142.472 3.47474 142.382 3.92148C142.293 4.35034 142.025 4.77921 141.578 5.20808L138.161 8.64336L134.582 5.15447C134.136 4.70773 133.868 4.27887 133.778 3.86787C133.689 3.439 133.76 3.01906 133.993 2.60806V2.42043H127.533V2.66167C127.837 2.89398 128.06 3.26924 128.203 3.78745Z" fill="#283841"></path>
</svg>
</Link>


<ul>
 <li><Link to ='/Contact' onClick={handleClick3}>Contact</Link></li>
 <li> <Link to ='/About'  onClick={handleClick4}>About</Link></li>
 <li><Link to ='/Projects'  onClick={handleClick2}>Projects</Link></li>


  
</ul>





  </nav>
  
  
  
 






);
}

export default NavBar;