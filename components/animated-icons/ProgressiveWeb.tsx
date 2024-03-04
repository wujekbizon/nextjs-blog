'use client'
import { motion } from 'framer-motion'

const ProgressiveWeb: React.FC<IconAttributes> = ({
  width = 56,
  height = 53,
  primary = '#5D6DFD',
  secondary = '#7fff00',
}) => {
  return (
    <svg style={{ width, height }} width="56" height="53" viewBox="0 0 56 53" fill="none">
      <mask id="mask0_487_812" maskUnits="userSpaceOnUse" x="0" y="0" width="56" height="53">
        <path d="M55.7777 0.611328H0.222168V52.1701H55.7777V0.611328Z" fill="white" />
      </mask>
      <g mask="url(#mask0_487_812)">
        <path
          d="M0.222168 3.72674C0.482446 2.94105 0.776335 2.17925 1.4205 1.60077C2.24911 0.857301 3.23383 0.611328 4.31731 0.611328C12.7061 0.614245 21.0949 0.613135 29.4831 0.613135C34.4369 0.613135 39.3901 0.610773 44.3438 0.614245C46.1511 0.615495 47.5162 1.4673 48.0927 2.93397C48.3783 3.66008 48.4831 5.12022 48.3136 6.09161C48.2369 6.10508 48.1516 6.13202 48.0662 6.13313C47.5804 6.1373 47.0945 6.13494 46.5251 6.13494C46.5251 5.60327 46.528 5.108 46.5251 4.61202C46.5156 3.17647 45.7954 2.45452 44.3515 2.45397C30.973 2.45216 17.5951 2.45161 4.21661 2.45397C2.80675 2.45397 2.07133 3.18633 2.07133 4.57924C2.06953 16.6763 2.06953 28.7734 2.07133 40.8705C2.07133 42.2312 2.81217 42.963 4.18425 42.9759C4.68772 42.9806 5.1912 42.9765 5.7312 42.9765V44.798C4.23425 44.8273 2.74967 44.979 1.50189 43.8969C0.815779 43.302 0.489529 42.524 0.222168 41.7001V3.72674Z"
          fill={secondary}
        />
        <path
          d="M31.6904 52.1697C24.9824 52.1697 18.2742 52.172 11.5668 52.1679C9.64347 52.1667 8.22833 51.145 7.7725 49.4114C7.66417 49.0003 7.62875 48.5595 7.62875 48.1321C7.62111 36.0877 7.6218 24.0433 7.62417 11.9989C7.62417 9.99891 8.61875 8.60891 10.4154 8.12877C10.8442 8.01405 11.3076 7.98766 11.7551 7.98766C25.0624 7.98057 38.3701 7.98002 51.6774 7.98363C54.2685 7.98418 55.7779 9.50057 55.7779 12.0792C55.7779 24.0696 55.7779 36.0602 55.7779 48.0507C55.7779 50.6754 54.2815 52.1697 51.6515 52.1703C44.9976 52.1708 38.3443 52.1697 31.6904 52.1697ZM31.6586 50.3324C38.3113 50.3324 44.9646 50.3324 51.6174 50.3324C53.2639 50.3324 53.9299 49.6772 53.9299 48.0565C53.9299 36.0672 53.9299 24.0785 53.9299 12.089C53.9299 10.4954 53.2633 9.83029 51.6574 9.83029C38.3514 9.82904 25.0453 9.82904 11.7393 9.83029C10.1433 9.83029 9.475 10.5029 9.475 12.1038C9.47444 24.0931 9.47444 36.0818 9.475 48.0711C9.475 49.6567 10.1581 50.3318 11.7535 50.3318C18.3885 50.3318 25.0235 50.3324 31.6586 50.3324Z"
          fill={primary}
        />
        <path d="M5.73598 4.33496V6.10843H3.95459V4.33496H5.73598Z" fill={primary} />
        <path d="M7.66016 4.3252H9.43502V6.08936H7.66016V4.3252Z" fill={primary} />
        <path
          d="M11.3584 6.10373C11.3461 5.93401 11.3313 5.81165 11.329 5.68928C11.2995 4.16456 11.3001 4.15873 12.8319 4.30567C12.9561 4.31734 13.1574 4.48137 13.1645 4.58553C13.1999 5.07859 13.1805 5.57567 13.1805 6.10317L11.3584 6.10373Z"
          fill={primary}
        />
        <motion.path
          animate={{ rotate: [0, 360] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: 'loop',
          }}
          d="M27.9994 22.3607C27.9994 21.6183 27.9931 20.8817 28.0012 20.1457C28.0101 19.3917 28.344 19.0455 29.0889 19.0421C30.825 19.0339 32.561 19.0344 34.2971 19.0421C35.0561 19.045 35.3836 19.3729 35.3965 20.1264C35.4072 20.7553 35.4118 21.3853 35.3936 22.014C35.3854 22.2928 35.4719 22.4503 35.7517 22.5147C35.926 22.5551 36.0914 22.6347 36.2587 22.7021C36.8919 22.955 37.4562 22.8354 37.9518 22.3432C38.2586 22.038 38.5554 21.7219 38.8775 21.4333C39.3304 21.0275 39.7992 21.0087 40.2314 21.4297C41.5364 22.6997 42.8283 23.9843 44.1062 25.2812C44.5274 25.7086 44.5137 26.1858 44.1028 26.6278C43.6735 27.0899 43.2129 27.523 42.7665 27.9686C42.69 28.0454 42.5357 28.1437 42.5499 28.1958C42.7035 28.7444 42.8631 29.2936 43.0728 29.8224C43.1217 29.9453 43.3637 30.053 43.5221 30.0607C44.1175 30.0887 44.7151 30.066 45.3118 30.0735C46.1621 30.084 46.5167 30.4137 46.5225 31.2393C46.5337 32.929 46.5349 34.6193 46.5219 36.3097C46.516 37.0925 46.1786 37.4233 45.3965 37.4439C44.764 37.4603 44.1293 37.4268 43.4985 37.4632C43.3349 37.4725 43.18 37.6604 43.0257 37.7717C43.001 37.7893 43.0039 37.8408 42.9839 37.8694C42.286 38.8689 42.6275 39.5657 43.4956 40.321C44.7953 41.4522 44.7399 41.6307 43.5215 42.8422C42.4857 43.8721 41.4521 44.9043 40.4128 45.9301C39.7903 46.5443 39.3262 46.5396 38.6974 45.923C38.2857 45.519 37.8799 45.1086 37.4689 44.7035C37.38 44.6157 37.2486 44.4511 37.1892 44.4717C36.6303 44.663 36.0603 44.8464 35.5474 45.1286C35.406 45.2064 35.4154 45.6064 35.4054 45.8604C35.3854 46.399 35.4101 46.9394 35.3942 47.4782C35.376 48.1105 35.0521 48.4794 34.4354 48.4858C32.6093 48.5051 30.7826 48.5057 28.9564 48.4846C28.3499 48.4776 28.0189 48.0929 28.0036 47.4635C27.9883 46.8347 27.9847 46.2047 28.006 45.5758C28.0165 45.2644 27.9482 45.0623 27.6108 44.991C27.4189 44.9505 27.2351 44.8644 27.0519 44.7878C26.4869 44.5512 25.9829 44.6535 25.5397 45.0946C25.2204 45.4125 24.9083 45.7392 24.5786 46.0454C24.1039 46.4857 23.5899 46.5126 23.1358 46.07C21.8579 44.8235 20.5924 43.564 19.3404 42.2924C18.8569 41.8017 18.8817 41.3328 19.3717 40.8251C19.8221 40.3579 20.3056 39.9217 20.7396 39.4404C20.8468 39.3215 20.8904 39.0533 20.8344 38.9C20.6583 38.4164 20.5406 37.7735 20.1749 37.5357C19.8026 37.2939 19.1625 37.4521 18.6401 37.4503C16.9965 37.4455 16.8953 37.3467 16.8953 35.6943C16.8953 34.2382 16.8918 32.7815 16.8965 31.3253C16.9 30.378 17.2092 30.0787 18.1732 30.0735C18.7521 30.07 19.331 30.0794 19.9093 30.0676C20.0394 30.0647 20.2467 30.0343 20.285 29.954C20.524 29.4524 20.7385 28.9371 20.9251 28.4136C20.9546 28.3304 20.8232 28.1636 20.7314 28.0687C20.2921 27.6161 19.8339 27.1811 19.3946 26.7279C18.8664 26.1829 18.8581 25.7173 19.391 25.1811C20.6107 23.9526 21.8379 22.7319 23.0728 21.5187C23.6099 20.9912 24.0775 20.9994 24.6286 21.5258C25.0721 21.949 25.509 22.3794 25.9312 22.8244C26.1321 23.0364 26.3035 23.0996 26.5874 22.9579C27.0372 22.7343 27.5136 22.5621 27.9994 22.3607ZM21.2083 25.9943C21.6889 26.4504 22.1518 26.8755 22.5982 27.3164C23.1269 27.8386 23.1487 28.1372 22.8443 28.8076C22.5115 29.5412 22.2018 30.2872 21.9197 31.0419C21.6694 31.7105 21.4504 31.9037 20.7361 31.9114C20.0907 31.9185 19.4453 31.9126 18.791 31.9126V35.5994C19.4464 35.5994 20.0589 35.5936 20.6712 35.6007C21.4375 35.6094 21.6529 35.7828 21.9186 36.4712C22.2089 37.223 22.5162 37.9696 22.8449 38.705C23.1576 39.4047 23.1306 39.6875 22.5669 40.2379C22.1217 40.6729 21.6576 41.0897 21.279 41.4428C22.2189 42.3767 23.0669 43.2199 23.9656 44.1126C24.3707 43.6917 24.82 43.2257 25.2682 42.7585C25.6657 42.3433 26.0968 42.2683 26.6368 42.5172C27.4365 42.8861 28.2568 43.2133 29.0812 43.5254C29.6071 43.7246 29.8621 44.06 29.8504 44.6215C29.8362 45.2808 29.8468 45.9412 29.8468 46.6204H33.5451C33.5451 45.9418 33.5497 45.2978 33.5439 44.6537C33.5386 44.0817 33.7876 43.7233 34.3436 43.5178C35.1704 43.2128 35.9849 42.8708 36.7875 42.5072C37.304 42.273 37.7268 42.3375 38.1119 42.7385C38.5731 43.2186 39.0353 43.6982 39.4369 44.115C40.3415 43.2046 41.1965 42.3439 42.0964 41.4375C41.68 41.0405 41.2131 40.591 40.7414 40.1465C40.315 39.7449 40.2732 39.3051 40.5187 38.78C40.8532 38.0662 41.1665 37.3408 41.4421 36.603C41.7619 35.7476 41.931 35.6018 42.8631 35.5989C43.4508 35.5965 44.0379 35.5989 44.6339 35.5989V31.9114C43.9343 31.9114 43.27 31.9026 42.6069 31.9143C42.0417 31.9243 41.7131 31.6649 41.5164 31.1386C41.2154 30.3335 40.875 29.5425 40.5299 28.755C40.2561 28.1297 40.2808 27.8357 40.7719 27.3521C41.2312 26.9001 41.7142 26.4715 42.1547 26.0617C41.2189 25.1336 40.365 24.2876 39.4569 23.3876C39.0453 23.8151 38.5831 24.2922 38.1243 24.7729C37.7226 25.1939 37.2862 25.2467 36.7533 24.9983C36.0037 24.6489 35.2358 24.3362 34.4626 24.0405C33.73 23.76 33.551 23.5464 33.5462 22.7769C33.5421 22.1558 33.5457 21.534 33.5457 20.9175H29.8846C29.8681 20.9929 29.8539 21.0269 29.8533 21.0615C29.8504 21.6364 29.8504 22.2114 29.8474 22.7869C29.8433 23.5469 29.6749 23.7583 28.9811 24.0247C28.2085 24.321 27.4442 24.6394 26.6862 24.9721C26.0196 25.2649 25.7593 25.2437 25.2353 24.7192C24.7787 24.2623 24.3436 23.784 23.9025 23.3186C22.9839 24.2308 22.14 25.0692 21.2083 25.9943Z"
          fill={secondary}
        />
        <path d="M52.0612 15.4023V17.1583H11.3604V15.4023H52.0612Z" fill={primary} />
        <path
          d="M11.327 21.7496C11.327 21.2168 11.3104 20.7343 11.3393 20.2542C11.3457 20.1471 11.5118 19.9609 11.6049 19.9603C13.9504 19.9545 16.296 19.9691 18.6416 19.9814C18.6552 19.9814 18.6686 20.0042 18.7146 20.0452V21.7491L11.327 21.7496Z"
          fill={primary}
        />
        <path
          d="M11.3276 23.6699H16.8927C16.8927 24.1999 16.912 24.6981 16.8768 25.1928C16.8691 25.2965 16.6588 25.4669 16.5405 25.4681C14.9187 25.4862 13.2963 25.4862 11.6745 25.4681C11.5579 25.4669 11.3506 25.2924 11.3436 25.1876C11.3081 24.6928 11.3276 24.1946 11.3276 23.6699Z"
          fill={primary}
        />
        <path
          d="M52.0682 46.6885V48.4942C51.143 48.4942 50.2301 48.4942 49.3168 48.4942C48.4034 48.4942 47.5148 48.4942 46.5708 48.4942V46.6885H52.0682Z"
          fill={secondary}
        />
        <path
          d="M11.3604 13.5144V11.7188H13.1772C13.1772 12.2287 13.193 12.7246 13.1642 13.2176C13.1583 13.3212 12.991 13.4951 12.8904 13.501C12.394 13.5303 11.8945 13.5144 11.3604 13.5144Z"
          fill={secondary}
        />
        <path d="M16.8722 11.7188V13.4676H15.0767V11.7188H16.8722Z" fill={secondary} />
        <path d="M20.5654 13.4855H18.7822V11.7168H20.5654V13.4855Z" fill={secondary} />
        <path
          d="M25.2227 33.7666C25.2145 30.2366 28.0995 27.3519 31.6599 27.3302C35.2404 27.3085 38.1695 30.181 38.1902 33.7338C38.2108 37.2791 35.2992 40.1884 31.7217 40.1966C28.1384 40.2053 25.2316 37.3288 25.2227 33.7666ZM31.6829 29.1758C29.1383 29.188 27.0583 31.2741 27.0861 33.7848C27.1142 36.3223 29.1995 38.3758 31.7277 38.3563C34.2547 38.337 36.3711 36.217 36.3369 33.7385C36.3022 31.2033 34.2216 29.1634 31.6829 29.1758Z"
          fill={primary}
        />
      </g>
    </svg>
  )
}
export default ProgressiveWeb
