import React from "react";
import Link from "next/link";

const TopGirlName = [
  "Ananya",
  "Saanvi",
  "Aaradhya",
  "Kiara",
  "Diya",
  "Avni",
  "Anika",
  "Meera",
  "Ishani",
  "Arya",
];
const TopBoyName = [
  "Aarav",
  "Vihaan",
  "Advik",
  "Reyansh",
  "Arjun",
  "Dhruv",
  "Krish",
  "Ayaan",
  "Kabir",
  "Shaurya",
];

const TopTen = () => {
  return (
    <div className="w-11/12 m-auto pt-14 grid lg:grid-cols-2 gap-5 grid-cols-1 md:pt-24">
      <div className="bg-pink-50 p-10 rounded-3xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.0"
          viewBox="0 0 1194.000000 1280.000000"
          className="w-56 h-56 pr-2 fill-pink-300 m-auto mb-8"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
            stroke="none"
          >
            <path d="M1730 12753 c-104 -58 -183 -136 -230 -226 l-35 -67 -86 6 c-107 8 -148 -8 -190 -75 -33 -52 -37 -96 -14 -181 8 -30 15 -87 15 -126 l0 -71 -102 39 c-202 76 -415 128 -470 115 -39 -10 -84 -52 -107 -100 -26 -53 -29 -192 -6 -277 8 -30 15 -64 15 -75 0 -18 -1 -18 -16 3 -34 49 -101 65 -155 36 -46 -23 -219 -300 -219 -350 0 -34 27 -91 57 -119 l28 -25 -49 -46 c-26 -26 -57 -65 -67 -88 -20 -44 -25 -116 -9 -145 15 -29 98 -58 186 -65 45 -3 128 -19 185 -35 57 -16 162 -39 232 -50 125 -21 130 -21 165 -4 48 23 82 83 82 144 0 26 -12 91 -26 145 -55 215 -38 242 136 212 82 -14 81 -7 16 -158 -45 -105 -52 -169 -23 -214 27 -40 76 -49 261 -44 91 2 166 0 166 -5 0 -4 -7 -30 -16 -57 -13 -40 -14 -58 -5 -100 6 -28 8 -58 4 -65 -5 -7 -37 -36 -73 -64 -213 -169 -502 -479 -611 -658 -193 -315 -270 -480 -370 -791 -116 -363 -170 -871 -129 -1212 8 -63 14 -135 15 -159 0 -45 0 -45 -60 -78 -33 -18 -88 -62 -121 -97 -70 -73 -89 -117 -99 -238 -6 -69 -3 -88 21 -160 53 -163 96 -224 218 -307 68 -47 126 -62 223 -59 45 1 84 0 86 -3 3 -2 32 -58 65 -124 76 -149 187 -329 311 -505 75 -105 138 -177 291 -330 203 -205 324 -305 533 -441 360 -236 844 -412 1265 -460 l112 -13 0 -58 c0 -52 -21 -110 -201 -559 -110 -276 -196 -505 -192 -509 9 -9 276 -124 312 -135 23 -7 23 -9 16 -89 -35 -404 -153 -920 -305 -1330 -67 -179 -94 -230 -159 -299 -80 -85 -173 -127 -332 -147 -282 -36 -304 -40 -366 -70 -73 -36 -115 -82 -156 -169 -42 -89 -43 -149 -2 -191 16 -17 40 -33 53 -37 21 -5 15 -10 -45 -38 -96 -45 -128 -87 -128 -169 1 -50 8 -76 39 -140 69 -143 178 -224 317 -234 l67 -5 -28 -24 c-58 -48 -48 -119 31 -237 118 -177 229 -206 454 -120 19 7 19 6 -2 -17 -74 -81 -37 -158 111 -230 94 -46 210 -74 269 -65 64 10 138 48 179 94 l37 41 0 -62 c0 -34 4 -74 9 -88 50 -130 366 -132 561 -3 161 107 501 539 699 890 70 123 189 371 252 524 46 112 200 531 244 667 l18 53 56 -41 c503 -366 996 -492 1612 -413 63 8 127 17 143 20 l27 6 0 -85 c0 -278 85 -553 230 -745 203 -269 508 -421 995 -493 130 -20 553 -17 720 5 308 39 460 77 600 149 136 71 293 200 398 326 l37 45 0 -50 c0 -127 108 -200 358 -240 205 -33 331 -15 383 55 l23 31 18 -29 c10 -16 35 -37 56 -47 72 -35 287 -14 351 34 49 37 65 69 69 141 l4 69 36 -40 c82 -91 181 -107 292 -48 70 38 125 87 143 128 6 15 14 78 17 140 l5 114 35 -53 c44 -66 93 -94 150 -84 55 9 126 59 172 120 142 187 168 634 60 1010 -137 475 -455 835 -851 965 -99 32 -247 60 -320 60 -40 0 -43 2 -37 22 113 391 122 805 25 1198 -56 224 -174 489 -296 660 -99 139 -353 391 -473 470 -453 296 -998 334 -1912 134 -86 -19 -163 -34 -171 -34 -11 0 -16 20 -20 83 -9 138 -65 271 -172 412 -155 204 -377 262 -653 170 -88 -30 -219 -94 -314 -154 l-65 -41 -7 -74 c-14 -152 30 -353 104 -480 46 -78 45 -79 -83 -35 -123 42 -271 116 -392 197 -166 110 -555 430 -555 457 0 7 19 44 42 81 80 131 217 429 263 570 84 258 133 495 156 757 14 160 6 535 -14 667 -30 192 -62 372 -84 465 -3 16 8 29 51 59 115 79 162 162 171 302 6 90 4 109 -24 217 -39 148 -83 256 -120 291 -63 61 -195 71 -328 26 -48 -16 -97 -30 -108 -30 -14 1 -30 19 -53 59 -88 152 -321 440 -494 606 -332 322 -698 547 -1163 717 -112 40 -278 79 -540 125 l-50 9 80 80 c44 43 112 108 150 144 39 36 100 97 137 135 37 39 90 91 118 117 86 82 112 163 67 206 -63 59 -187 90 -368 91 -42 1 -91 4 -108 7 l-31 6 30 34 c55 63 51 120 -9 161 -43 29 -77 29 -153 -2 -34 -14 -68 -25 -75 -25 -22 0 -34 48 -40 160 -3 64 -11 114 -19 127 -20 32 -92 66 -139 66 -72 0 -208 -98 -390 -279 l-65 -65 0 110 c0 61 5 141 12 178 9 57 9 82 -6 152 -9 46 -24 99 -33 118 -23 49 -93 87 -159 87 -63 0 -98 -21 -212 -127 -43 -41 -89 -80 -100 -86 -12 -6 -51 -33 -86 -60 -35 -27 -90 -58 -121 -70 -56 -21 -145 -29 -145 -12 0 13 102 104 137 123 18 9 45 35 62 59 51 69 36 135 -35 165 -50 21 -61 18 -154 -33z m620 -774 c41 -7 77 -14 78 -15 2 -1 -14 -25 -36 -53 -58 -73 -100 -151 -108 -199 -6 -38 -4 -44 24 -70 16 -15 48 -34 71 -42 46 -15 87 -9 241 37 176 52 159 51 191 12 38 -46 69 -112 69 -148 0 -24 -7 -33 -33 -46 -40 -19 -77 -79 -77 -126 0 -41 0 -40 -71 -105 -44 -41 -67 -54 -112 -64 l-56 -13 -88 57 c-48 32 -112 72 -142 89 -74 44 -81 57 -48 96 26 32 47 87 47 127 0 19 -9 34 -65 111 -15 20 -15 24 4 62 30 57 27 101 -6 134 -33 30 -108 66 -141 67 -30 0 -123 40 -117 50 2 4 22 10 44 14 21 3 58 15 82 26 50 22 121 22 249 -1z m-629 -161 c14 -61 16 -64 63 -86 27 -13 73 -26 103 -29 53 -6 54 -6 48 -34 -10 -43 13 -109 50 -146 l34 -34 -37 -77 c-66 -139 -48 -187 105 -271 56 -31 105 -59 108 -63 16 -16 -266 -128 -324 -128 -14 0 -51 -9 -81 -20 -70 -25 -71 -25 -64 8 7 34 -35 144 -68 179 -39 41 -100 52 -203 37 -50 -7 -103 -14 -119 -14 -33 0 -34 -5 19 123 33 80 35 91 25 123 -28 83 -134 151 -257 163 -34 4 -65 10 -69 14 -10 9 27 48 101 107 96 76 96 75 179 45 l72 -26 59 22 c41 15 79 40 120 79 58 55 103 90 115 90 4 0 13 -28 21 -62z m-1204 -235 c-17 -32 -67 -82 -67 -66 0 5 8 17 19 27 10 9 27 35 37 58 12 26 20 36 22 26 2 -9 -3 -29 -11 -45z m2593 -325 c45 -49 40 -58 -32 -58 -38 0 -50 4 -58 21 -21 38 -3 71 43 78 4 0 25 -18 47 -41z m6533 -8643 c-3 -9 -8 -14 -10 -11 -3 3 -2 9 2 15 9 16 15 13 8 -4z" />
          </g>
        </svg>

        <h2 className="text-2xl mb-2 text-center text-pink-500">
          Top 10 Most Popular Indian Baby Girl Names of 2024!
        </h2>
        <p className="pt-2 text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <div className="overflow-auto grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 mt-7 gap-5">
          {TopGirlName.map((item) => (
            <Link
              href={`/indian/baby-name/${item.toLowerCase()}`}
              className="min-w-20 bg-pink-200 text-center rounded-2xl text-lg py-2 w-full cursor-pointer inline-block hover:font-bold hover:bg-pink-500 hover:text-white"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-blue-50 p-10 rounded-3xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.0"
          className="w-56 h-56 pr-2 fill-blue-300 m-auto mb-8"
          viewBox="0 0 1095.000000 1280.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
            stroke="none"
          >
            <path d="M7280 12785 c-60 -17 -120 -50 -171 -92 -44 -38 -104 -132 -118 -188 -6 -25 -15 -45 -19 -45 -5 0 -57 6 -118 14 -451 59 -978 44 -1394 -40 -868 -173 -1579 -644 -2056 -1359 -150 -225 -283 -513 -318 -686 -5 -23 -12 -28 -53 -34 -116 -17 -251 -90 -323 -174 -47 -53 -91 -142 -111 -221 -20 -80 -18 -278 5 -367 32 -129 111 -227 204 -253 53 -14 169 -12 225 5 37 11 49 11 51 2 2 -7 18 -72 35 -145 81 -339 222 -659 431 -972 114 -170 239 -319 420 -500 238 -239 461 -418 748 -603 l104 -66 -104 -52 c-402 -202 -651 -389 -803 -603 -27 -38 -93 -156 -146 -263 -113 -223 -111 -216 -244 -868 -124 -607 -200 -883 -295 -1078 -39 -81 -53 -98 -159 -195 -241 -223 -323 -312 -369 -400 -44 -84 -72 -192 -72 -277 0 -63 27 -209 54 -289 l24 -71 -82 -85 c-147 -156 -279 -361 -478 -749 -126 -245 -281 -512 -374 -648 -229 -330 -634 -585 -1414 -888 -209 -81 -316 -133 -345 -165 -19 -21 -19 -22 -1 -35 30 -23 121 -28 301 -19 392 20 486 11 653 -57 67 -28 92 -32 192 -36 111 -5 224 5 340 28 83 16 298 13 450 -6 201 -25 777 -22 903 5 113 25 213 73 300 145 106 87 152 154 187 265 65 213 135 514 170 736 21 127 30 271 30 449 0 234 -26 404 -85 556 -31 77 -75 235 -75 267 0 13 6 22 15 22 8 0 57 22 110 49 52 27 95 45 95 41 0 -4 -7 -27 -15 -50 -23 -65 -20 -255 4 -339 46 -153 63 -271 59 -404 -3 -118 -2 -127 16 -127 27 0 113 46 173 92 135 104 234 300 264 524 16 118 6 361 -16 429 -24 71 -71 142 -106 157 -16 7 -28 16 -27 20 2 3 41 46 88 95 104 108 221 253 285 351 85 132 174 343 222 522 6 23 7 -67 5 -253 -6 -416 20 -777 79 -1090 19 -104 20 -124 10 -440 -12 -358 -26 -492 -66 -645 -46 -175 -148 -351 -262 -452 -26 -23 -112 -85 -190 -136 -157 -103 -252 -190 -298 -274 -27 -49 -30 -64 -30 -140 0 -117 29 -176 144 -290 140 -139 199 -172 411 -229 309 -85 593 -87 826 -7 213 73 419 217 579 406 306 360 462 700 525 1143 15 109 54 538 61 674 2 44 22 -69 74 -427 93 -640 130 -813 235 -1125 72 -211 109 -282 197 -376 216 -228 554 -360 1113 -434 228 -30 553 15 791 111 l86 34 48 -21 c136 -60 338 -90 480 -71 110 14 135 27 163 82 32 65 29 102 -14 149 -37 42 -81 61 -191 82 -61 11 -63 12 -57 38 13 53 57 181 63 181 3 0 20 -22 38 -49 50 -76 199 -246 241 -273 48 -32 96 -48 142 -48 120 0 431 155 478 239 41 72 22 151 -46 193 -46 28 -103 19 -204 -33 -59 -30 -87 -39 -107 -34 -50 11 -118 102 -135 180 -6 29 -4 31 62 62 137 64 237 171 320 342 l46 93 24 -28 c63 -77 184 -191 247 -234 82 -55 145 -88 249 -130 74 -29 77 -29 116 -14 78 31 150 144 150 233 -1 50 -33 116 -67 137 -203 126 -339 250 -439 400 -34 50 -98 166 -143 259 -45 92 -95 188 -111 212 -30 44 -76 142 -69 146 2 1 40 20 83 41 90 45 187 130 237 207 74 116 103 265 76 393 l-14 68 30 32 c40 43 77 123 77 169 0 97 -89 198 -195 221 -41 9 -108 -16 -161 -59 l-42 -35 -54 25 c-75 34 -184 55 -288 55 l-89 0 16 43 c24 65 29 265 9 365 -22 110 -41 165 -145 431 -50 127 -91 232 -91 235 0 2 9 6 19 9 18 4 15 15 -34 144 -29 77 -123 358 -210 624 -173 534 -250 739 -360 964 -160 325 -366 583 -573 715 -39 25 -71 47 -71 50 -1 3 45 30 102 59 477 249 879 592 1170 1000 37 52 71 100 75 108 7 11 14 11 48 -3 214 -91 405 -40 507 134 68 117 101 245 101 387 -1 113 -23 195 -76 277 -36 58 -135 151 -189 178 l-39 20 0 103 c-1 290 -74 716 -179 1033 -312 949 -987 1636 -1953 1988 l-48 18 0 73 c0 193 -127 377 -307 445 -76 29 -199 35 -273 15z m243 -168 c109 -50 174 -138 184 -249 5 -55 7 -58 40 -69 19 -6 32 -13 30 -15 -3 -3 -46 8 -96 23 -71 21 -91 32 -91 46 0 55 -57 135 -122 168 -41 21 -117 25 -151 8 -33 -17 -78 -61 -88 -87 -8 -20 -13 -22 -51 -16 -24 4 -45 8 -46 10 -10 8 28 82 60 119 82 93 211 117 331 62z m837 -8712 c116 -284 182 -393 259 -425 37 -15 57 -67 116 -303 61 -246 103 -331 180 -358 42 -15 45 -27 45 -163 0 -115 21 -284 46 -376 9 -30 31 -89 51 -131 l34 -75 -35 -60 c-49 -81 -109 -232 -135 -335 -30 -120 -42 -226 -40 -369 1 -118 -15 -256 -30 -273 -4 -4 -45 13 -92 39 -214 118 -341 240 -414 399 -68 145 -72 216 -44 775 41 824 32 1427 -27 1825 -4 22 -4 38 -1 35 3 -3 42 -95 87 -205z" />
          </g>
        </svg>
        <h2 className="text-2xl mb-2 text-center text-blue-500">
          Top 10 Most Popular Indian Baby Boy Names of 2024!
        </h2>
        <p className="pt-2 text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <div className="overflow-auto grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 mt-7 gap-5">
          {TopBoyName.map((item) => (
            <Link
              href={`/indian/baby-name/${item.toLowerCase()}`}
              className="min-w-20 bg-blue-200 text-center rounded-2xl text-lg py-2 w-full cursor-pointer inline-block hover:font-bold hover:bg-blue-500 hover:text-white"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopTen;
