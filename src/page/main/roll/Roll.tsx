
import { motion } from 'framer-motion';
import './roll.scss';

function Roll() {
    return (
        <motion.div className="roll"
            initial={{
                rotate: 360,
                scale: 0
            }}
            animate={{
                rotate: 0,
                scale: 1
            }}
        >
            <svg width="692" height="617" viewBox="0 0 692 617" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M691.893 277.524L691.809 274.992L692 273.26L691.758 273.446L690.683 240.812L691.229 241.614L690.661 238.519L690.596 238.158L690.591 237.995L690.542 236.54L690.335 236.734L684.758 206.301L685.952 208.056L684.101 202.715L683.832 201.244L683.658 201.437L672.642 169.652L672.69 169.588L672.489 169.209L672.039 167.912L671.9 168.098L656.25 138.586L656.293 138.517L656.016 138.145L655.425 137.03L655.343 137.159L651.898 132.086L651.895 132.081L644.433 121.092L644.508 121.089L643.669 119.965L643.472 119.593L643.394 119.595L623.472 92.8887L623.744 92.8612L622.629 91.7587L622.406 91.4593L622.334 91.4666L598.552 67.948L598.858 67.8959L597.451 66.8598L597.214 66.6248L597.147 66.6361L569.949 46.6035L570.289 46.5217L568.699 45.6601L568.583 45.5971L568.34 45.4178L568.334 45.4192L564.998 42.9569L565.756 44.0653L538.141 29.0994L538.51 28.9829L536.51 28.2161L533.744 26.7167L534.157 27.3137L503.65 15.6173L504.046 15.4607L501.773 14.8979L499.495 14.0244L499.755 14.3982L467 6.29081L467.412 6.09102L464.906 5.77248L462.96 5.29092L463.141 5.54822L428.741 1.17616L429.155 0.932864L426.482 0.889178L424.787 0.673885L424.922 0.863588L389.399 0.282504L389.794 0L387.043 0.244049L385.558 0.219774L385.664 0.366158L349.503 3.57176L349.85 3.2646L347.153 3.78014L345.839 3.89647L345.926 4.01466L309.582 10.9636L309.852 10.6565L307.361 11.3884L306.202 11.6104L306.274 11.7079L270.13 22.3319L270.3 22.057L268.184 22.904L267.161 23.2048L267.224 23.2887L231.668 37.5279L231.733 37.3218L230.133 38.1428L229.228 38.5056L229.284 38.5782L194.741 56.3098L194.732 56.1857L193.691 56.8489L192.894 57.2581L192.945 57.3241L159.928 78.3676L159.887 78.3104L159.29 78.774L158.604 79.2112L158.651 79.2706L127.986 103.107L127.939 103.049L127.368 103.587L126.78 104.044L126.371 104.362L126.491 104.414L98.9285 130.404L98.8752 130.34L98.3097 130.988L97.0013 132.222L97.2263 132.23L73.0825 159.904L73.0206 159.83L72.4713 160.605L71.0055 162.286L71.327 162.22L50.7649 191.236L50.6911 191.148L50.2884 191.866L50.1733 192.07L48.7313 194.105L49.1143 193.958L32.2522 224.006L32.1618 223.901L31.6982 224.994L30.4297 227.254L30.8309 227.038L17.7792 257.799L17.6652 257.669L17.2848 258.964L16.2847 261.322L16.6703 261.058L7.53629 292.178L7.3869 292.009L7.13339 293.551L6.44454 295.898L6.79511 295.608L1.68466 326.701L1.48125 326.473L1.41736 328.327L1.04779 330.577L1.35029 330.281L0.296357 360.898L0 360.57L0.229307 362.839L0.157403 364.93L0.411476 364.639L3.40714 394.265L2.93772 393.749L3.64576 396.626L3.83743 398.521L4.0442 398.245L10.9488 426.299L10.0944 425.357L11.6755 429.252L12.0883 430.929L12.252 430.672L22.6568 456.305L20.6294 454.095L24.2619 460.259L24.8509 461.71L24.978 461.474L41.0848 488.802L41.0548 488.87L41.3141 489.191L42.0365 490.417L42.1315 490.204L62.3428 515.245L62.3173 515.316L62.647 515.621L63.4651 516.635L63.4987 516.541L72.3363 526.131L76.2296 530.353L76.0957 530.379L77.1569 531.362L77.4132 531.679L77.4844 531.665L101.487 553.895L101.238 553.964L102.533 554.863L102.806 555.117L102.871 555.098L130.394 574.213L130.13 574.309L131.651 575.085L131.931 575.28L131.934 575.279L137.248 578.973L135.47 577.034L162.71 590.932L162.438 591.058L164.156 591.67L164.444 591.817L164.449 591.814L167.862 593.561L167.091 592.716L198.021 603.738L197.751 603.893L199.628 604.311L202.449 605.316L202.021 604.843L235.879 612.375L235.624 612.557L237.35 612.732L237.596 612.757L239.881 613.266L239.608 612.961L275.742 616.628L275.516 616.83L277.508 616.807L279.411 617L279.222 616.787L317.053 616.341L316.871 616.551L318.783 616.32L320.403 616.301L320.264 616.142L359.181 611.442L359.055 611.646L360.796 611.247L362.179 611.08L362.071 610.955L401.472 601.914L401.406 602.094L402.88 601.591L404.068 601.319L403.981 601.216L443.22 587.839L443.207 587.98L444.368 587.447L445.38 587.102L445.309 587.016L483.706 569.401L483.73 569.498L484.573 569.003L485.435 568.607L485.374 568.532L522.185 546.878L522.229 546.937L522.812 546.509L523.509 546.099L523.535 546.084L523.481 546.017L557.804 520.78L557.854 520.844L558.433 520.317L559.313 519.67L559.212 519.608L590.184 491.43L590.242 491.505L590.826 490.845L591.853 489.911L591.691 489.87L618.804 459.287L618.873 459.379L619.451 458.558L620.538 457.333L620.316 457.331L643.175 424.895L643.259 425.008L643.808 423.997L644.852 422.515L644.586 422.562L662.889 388.846L662.995 388.994L663.489 387.74L664.392 386.077L664.106 386.173L677.65 351.76L677.793 351.961L678.184 350.405L678.878 348.641L678.592 348.778L687.25 314.283L687.452 314.571L687.668 312.618L688.116 310.831L687.846 310.999L691.58 277.073L691.893 277.524ZM677.118 348.38L674.155 344.218L674.119 344.167L683.111 308.395L686.09 312.633L677.118 348.38ZM522.526 544.821L519.072 540.492L553.444 515.206L556.862 519.576L522.526 544.821ZM521.241 545.66L484.397 567.333L480.915 563.057L517.796 541.342L521.241 545.66ZM442.789 586.37L402.922 599.962L399.432 595.831L439.335 582.205L442.789 586.37ZM197.229 601.832L164.894 590.31L162.311 587.479L194.657 598.995L197.229 601.832ZM161.058 588.373L132.51 573.807L130.671 571.802L159.211 586.349L161.058 588.373ZM126.835 569.88L103.515 553.685L103.462 553.627L126.742 569.779L126.835 569.88ZM100.715 130.821L128.021 105.071L139.364 109.939L116.838 131.161L116.786 131.124L116.57 131.371L100.715 130.821ZM194.863 57.9662L229.164 40.3585L224.32 55.5789L223.96 55.7225L223.983 55.7853L195.769 70.2307L194.863 57.9662ZM266.573 25.197L255.552 43.0941L255.153 43.2108L255.167 43.2747L226.155 54.8469L231.067 39.4168L266.573 25.197ZM305.232 13.6082L287.621 33.6939L287.217 33.7705L287.221 33.8336L257.74 42.4544L268.932 24.2782L305.232 13.6082ZM595.054 66.9922L522.65 79.314L522.435 79.0962L522.361 79.1584L501.088 63.1981L568.007 47.0715L595.054 66.9922ZM688.442 234.874L686.452 231.983L680.662 200.315L682.64 203.21L688.442 234.874ZM690.197 272.4L687.687 268.782L686.579 234.86L689.08 238.494L690.197 272.4ZM25.8242 459.902L56.8435 402.267L69.7993 423.82L69.7039 423.885L69.9338 424.164L41.8484 487.091L25.8242 459.902ZM426.585 2.44479L462.117 6.96005L415.869 29.3892L415.535 29.3046L415.504 29.3685L387.161 25.6404L426.585 2.44479ZM312.432 609.501L273.201 609.987L269.845 606.205L309.1 605.696L312.432 609.501ZM42.8304 488.638L71.0186 425.48L87.2417 445.153L87.1504 445.23L87.4205 445.474L62.9477 513.562L42.8304 488.638ZM657.709 381.685L638.836 416.43L635.63 412.077L635.592 412.024L654.49 377.244L657.709 381.685ZM614.565 451.093L611.243 446.671L634.702 413.393L637.992 417.86L614.565 451.093ZM516.833 540.135L479.939 561.857L476.448 557.566L513.378 535.801L516.833 540.135ZM192.489 596.6L160.115 585.074L157.521 582.232L189.894 593.734L189.929 593.772L192.489 596.6ZM521.16 80.1688L467.499 125.313L451.548 113.058L499.41 63.8493L521.16 80.1688ZM122.022 564.644L98.7032 548.465L98.6164 548.371L121.929 564.543L122.016 564.637L122.022 564.644ZM141.905 109.755L166.777 90.4415L198.663 131.498L198.659 131.5L198.706 131.561L179.965 146.043L179.918 145.992L179.888 146.02L141.905 109.755ZM321.162 28.9762L351.919 26.3322L340.052 83.2769L339.796 83.2697L339.808 83.3597L317.022 85.1564L321.162 28.9762ZM307.778 604.184L268.503 604.693L265.137 600.894L304.163 600.357L304.179 600.427L304.463 600.392L307.778 604.184ZM127.651 385.956L139.737 400.289L139.489 400.336L139.995 400.784L88.4105 444.169L71.9444 424.2L127.651 385.956ZM200.906 131.889L220.974 119.212L269.106 193.242L269.03 193.28L269.084 193.348L255.691 201.711L200.906 131.889ZM225.915 56.5889L255.489 44.792L266.562 96.8536L266.42 96.8943L266.45 96.9669L244.299 105.681L225.915 56.5889ZM268.495 97.8907L291.172 91.3974L317.539 174.387L317.15 174.454L317.231 174.558L302.384 178.661L268.495 97.8907ZM292.665 91.0546L315.61 86.8728L334.358 171.403L333.82 171.439L333.919 171.567L319.058 174.126L292.665 91.0546ZM668.778 336.681L665.789 332.484L665.91 332.177L665.827 332.142L674.794 296.561L677.798 300.833L668.778 336.681ZM633.747 412.097L610.279 445.387L606.948 440.949L630.441 407.619L633.747 412.097ZM349.948 599.204L309.75 604.119L306.295 600.167L346.296 595.25L346.318 595.317L346.553 595.263L349.948 599.204ZM317.131 86.6816L340.006 84.8786L351.142 170.269L335.899 171.299L317.131 86.6816ZM437.641 199.55L427.331 191.428L450.811 114.418L466.599 126.549L437.641 199.55ZM680.219 222.927L678.235 220.043L678.223 219.649L678.136 219.633L672.416 188.251L674.43 191.195L680.219 222.927ZM631.369 406.304L631.515 406.096L631.44 406.049L650.27 371.414L653.497 375.872L634.59 410.668L631.369 406.304ZM581.69 477.825L578.294 473.394L605.955 442.17L609.313 446.645L581.69 477.825ZM580.614 478.932L549.307 507.44L545.866 503.033L577.204 474.484L580.614 478.932ZM181.015 147.163L199.649 132.763L254.387 202.524L254.382 202.527L254.431 202.588L241.934 212.159L181.015 147.163ZM387.314 88.6779L383.566 173.176L369.151 170.967L365.555 85.6202L387.314 88.6779ZM413.048 184.787L415.031 187.432L415.02 187.425L415.605 188.204L404.287 183.461L401.711 180.044L413.048 184.787ZM389.405 583.696L353.82 499.117L385.899 487.814L429.443 569.977L389.405 583.696ZM117.231 559.424L116.934 559.218L117.137 559.321L117.184 559.373L117.231 559.424ZM129.291 385.531L206.798 376.669L214.946 386.126L141.46 399.964L129.291 385.531ZM191.882 340.648L194.196 343.394L196.957 353.497L194.642 350.753L191.882 340.648ZM191.767 293.829L195.408 280.908L198.849 285.069L195.221 297.972L191.767 293.829ZM209.017 252.157L212.576 256.508L205.582 269.085L202.011 264.752L209.017 252.157ZM649.78 368.914L564.113 324.225L575.585 295.472L663.943 333.003L649.78 368.914ZM193.238 339.886L190.962 337.185L189.553 325.774L192.398 329.166L193.813 340.569L193.309 339.971L193.237 339.884L193.238 339.886ZM289.088 191.266L274.951 198.307L271.396 193.81L285.552 186.756L289.088 191.266ZM322.709 181.637L326.154 186.085L311.187 190.198L307.737 185.765L322.709 181.637ZM398.949 178.917L401.835 182.745L389.152 179.214L386.265 175.402L398.949 178.917ZM437.422 201.323L438.247 202.427L431.375 197.005L430.559 195.916L437.422 201.323ZM676.533 219.347L586.627 203.3L581.97 176.213L670.374 185.562L676.533 219.347ZM630.145 405.233L548.171 353.592L563.458 325.608L649.136 370.303L630.145 405.233ZM220.103 508.733L240.628 448.887L263.473 450.686L250.816 511.417L220.103 508.733ZM375.649 182.407L361.251 181.82L358.033 177.611L372.442 178.191L375.649 182.407ZM580.444 176.344L585.09 203.364L514.736 218.454L511.484 198.5L580.444 176.344ZM385.277 486.412L353.367 497.655L341.06 439.809L364.657 431.356L385.277 486.412ZM196.065 301.372L199.38 305.351L197.485 318.034L194.164 314.066L196.065 301.372ZM327.166 187.392L330.597 191.83L315.646 195.929L312.204 191.505L327.166 187.392ZM441.79 207.17L442.59 208.238L435.735 202.826L434.939 201.763L441.79 207.17ZM434.566 389.182L452.923 372.301L503.119 408.03L478.209 430.854L434.566 389.182ZM318.033 419.748L333.207 417.569L314.385 444.885L291.467 448.108L318.033 419.748ZM335.292 417.236L350.619 413.395L339.625 438.661L316.595 444.369L335.292 417.236ZM384.4 399.598L388.339 418.498L366.076 429.077L369.429 406.74L384.4 399.598ZM367.79 407.377L364.421 429.817L341.579 437.998L352.506 412.884L367.79 407.377ZM253.523 411.411L266.441 415.575L216.809 442.664L197.232 436.217L253.523 411.411ZM219.104 443.153L268.495 416.196L282.222 418.829L239.935 447.266L219.104 443.153ZM242.345 447.488L284.395 419.209L298.76 420.271L264.147 449.204L242.345 447.488ZM497.707 308.719L506.173 287.675L574.084 295.113L562.682 323.692L497.707 308.719ZM477.015 431.828L449.633 452.189L413.2 405.274L433.389 390.171L477.015 431.828ZM401.404 389.345L414.717 379.373L432.057 389.258L412.276 404.055L401.404 389.345ZM427.924 367.287L451.229 371.784L433.343 388.232L415.947 378.314L427.924 367.287ZM484.225 330.374L450.582 338.273L457.658 325.393L494.982 310.746L484.225 330.374ZM463.807 310.252L504.185 288.526L496.081 308.671L458.494 323.422L463.807 310.252ZM467.914 294.91L510.387 265.943L505.028 286.335L464.392 308.201L467.914 294.91ZM449.542 340.088L482.944 332.245L469.637 351.091L440.761 352.535L449.542 340.088ZM439.59 354.126L468.274 352.69L452.578 370.486L429.148 365.966L439.59 354.126ZM506.644 286.188L512.233 264.924L582.043 264.762L574.592 293.63L506.644 286.188ZM510.93 263.723L468.221 292.85L469.917 279.58L513.462 243.373L510.93 263.723ZM513.689 241.196L469.944 277.57L469.801 264.517L513.378 221.179L513.689 241.196ZM504.215 406.934L453.996 371.189L470.223 352.791L526.22 382.026L504.215 406.934ZM527.2 380.813L471.174 351.563L485.016 331.959L545.957 354.232L527.2 380.813ZM546.802 352.913L485.827 330.627L497.057 310.138L561.994 325.103L546.802 352.913ZM585.862 232.975L515.207 240.699L514.885 219.986L585.224 204.9L585.862 232.975ZM513.296 219.105L469.556 262.605L467.564 249.941L510.138 199.728L513.296 219.105ZM466.011 249.889L468.272 264.265L468.435 279.138L466.498 294.29L462.477 309.466L456.432 324.454L448.437 339.005L438.633 352.901L427.143 365.929L414.174 377.87L399.912 388.552L384.584 397.816L368.438 405.518L351.719 411.542L334.68 415.812L317.591 418.266L300.709 418.881L284.293 417.668L268.557 414.65L253.761 409.88L240.108 403.46L227.762 395.483L219.326 388.167L214.218 380.076L208.605 367.359L204.909 353.882L203.154 339.833L203.374 325.414L205.539 310.821L209.626 296.259L215.582 281.924L223.305 268.023L232.701 254.741L243.642 242.264L255.961 230.767L269.517 220.406L284.111 211.321L299.542 203.662L315.591 197.53L332.066 193.014L348.694 190.183L365.283 189.099L381.559 189.788L397.315 192.232L412.295 196.429L426.306 202.312L439.104 209.811L450.52 218.823L456.044 224.667L461.709 236.21L466.011 249.889ZM246.326 219.987L249.908 224.457L238.622 234.99L235.027 230.534L246.326 219.987ZM310.644 191.987L314.12 196.456L299.487 202.046L295.999 197.599L310.644 191.987ZM282.607 210.457L269.259 218.766L265.703 214.305L279.069 205.983L282.607 210.457ZM268.003 219.64L255.601 229.119L252.032 224.664L264.44 215.171L268.003 219.64ZM259.915 209.483L263.487 213.975L251.076 223.471L247.491 218.999L259.915 209.483ZM243.17 240.614L239.585 236.182L250.866 225.653L254.433 230.104L243.17 240.614ZM283.951 209.694L280.428 205.238L294.542 198.217L298.054 202.694L283.951 209.694ZM279.459 204.013L275.919 199.532L290.052 192.494L293.579 196.988L279.459 204.013ZM238.52 237.294L242.093 241.712L232.125 253.081L228.544 248.677L238.52 237.294ZM231.144 254.297L222.615 266.355L219.044 261.991L227.587 249.921L231.144 254.297ZM214.012 281.723L208.686 294.543L205.188 290.322L210.521 277.49L214.012 281.723ZM203.988 310.885L202.107 323.557L198.794 319.599L200.688 306.922L203.988 310.885ZM201.845 325.624L201.658 337.815L198.534 334.098L198.72 321.891L201.845 325.624ZM203.082 351.568L200.257 348.217L198.842 336.839L201.661 340.191L203.082 351.568ZM206.232 364.478L203.945 361.77L201.181 351.683L203.467 354.394L206.232 364.478ZM207.231 368.028L210.714 375.917L209.558 374.553L206.086 366.672L207.231 368.028ZM407.725 190.568L410.579 194.36L397.929 190.815L395.069 187.04L407.725 190.568ZM413.032 195.079L410.488 191.699L421.801 196.446L424.342 199.829L413.032 195.079ZM427.163 201.043L425.175 198.396L434.666 203.948L436.655 206.604L427.163 201.043ZM446.926 214.039L440.086 208.639L439.299 207.587L446.142 212.991L446.926 214.039ZM430.307 198.127L432.306 200.796L422.803 195.237L420.8 192.573L430.307 198.127ZM380.043 188.193L365.66 187.584L362.46 183.401L376.851 183.987L380.043 188.193ZM382.054 188.317L378.993 184.283L392.671 186.404L395.726 190.437L382.054 188.317ZM360.506 183.36L363.798 187.663L348.963 188.632L345.666 184.336L360.506 183.36ZM343.864 184.498L347.228 188.88L332.223 191.436L328.84 187.059L343.864 184.498ZM218.205 263.379L221.74 267.698L214.77 280.241L211.223 275.941L218.205 263.379ZM204.647 292.064L208.062 296.184L204.45 309.053L201.029 304.944L204.647 292.064ZM194.203 331.316L197.037 334.691L198.452 346.076L195.617 342.71L194.203 331.316ZM406.212 188.558L393.545 185.027L390.671 181.225L403.349 184.754L406.212 188.558ZM388.278 180.591L391.119 184.351L391.116 184.35L391.343 184.649L377.661 182.529L374.585 178.484L388.278 180.591ZM356.08 177.572L359.39 181.901L344.545 182.876L341.224 178.562L356.08 177.572ZM274.561 200.277L278.116 204.776L264.744 213.101L261.177 208.616L274.561 200.277ZM233.962 231.647L237.545 236.088L227.566 247.474L223.97 243.054L233.962 231.647ZM197.221 320.1L197.035 332.313L193.895 328.573L194.088 316.356L197.221 320.1ZM198.836 348.902L201.602 358.998L200.736 357.973L200.421 357.598L200.423 357.602L199.298 356.27L196.539 346.176L198.836 348.902ZM177.041 426.81L239.693 404.954L251.636 410.571L195.115 435.478L177.041 426.81ZM195.429 437.233L215.817 443.948L187.831 502.06L160.521 492.762L195.429 437.233ZM266.591 449.154L300.987 420.403L315.833 419.861L289.088 448.413L266.591 449.154ZM389.737 417.72L385.806 398.864L400.138 390.203L411.006 404.906L389.737 417.72ZM582.352 263.232L512.509 263.393L515.14 242.246L585.769 234.524L582.352 263.232ZM509.768 197.803L467.069 248.164L463.263 236.061L503.808 179.349L509.768 197.803ZM425.932 192.289L427.947 194.978L418.427 189.416L416.413 186.729L425.932 192.289ZM419.98 194.023L408.664 189.275L406.111 185.883L417.425 190.625L419.98 194.023ZM342.809 183.126L327.78 185.689L324.383 181.303L339.423 178.726L342.809 183.126ZM309.593 190.637L309.662 190.726L295.012 196.339L291.508 191.876L306.177 186.248L309.593 190.637ZM213.616 257.778L217.165 262.107L210.181 274.674L206.625 270.351L213.616 257.778ZM205.922 271.901L209.422 276.157L204.087 288.994L200.574 284.756L205.922 271.901ZM200.033 286.497L203.463 290.635L199.843 303.521L196.406 299.394L200.033 286.497ZM192.397 326.788L189.247 323.032L189.441 310.806L192.59 314.567L192.397 326.788ZM201.431 361.161L202.6 362.545L206.085 370.457L204.911 369.072L201.431 361.161ZM217.314 444.359L239.092 448.659L218.564 508.516L218.561 508.524L189.337 502.453L217.314 444.359ZM285.677 510.522L290.144 449.839L314.114 446.468L318.004 506.206L285.677 510.522ZM319.514 505.914L315.626 446.185L339.593 440.246L351.9 498.096L319.514 505.914ZM366.069 430.773L388.892 419.928L417.608 471.317L386.689 485.83L366.069 430.773ZM450.574 453.395L478.107 432.92L543.682 502.84L509.27 528.194L450.574 453.395ZM577.243 472.278L505.406 407.892L527.543 382.835L604.884 441.075L577.243 472.278ZM528.49 381.635L547.362 354.889L629.339 406.532L605.835 439.878L528.49 381.635ZM370.166 172.67L383.869 174.77L386.952 178.839L373.252 176.732L370.166 172.67ZM255.383 203.785L258.964 208.287L246.535 217.806L242.935 213.317L255.383 203.785ZM241.769 214.307L245.367 218.792L234.065 229.342L230.461 224.877L241.769 214.307ZM232.988 230.44L222.993 241.851L219.381 237.413L229.397 225.99L232.988 230.44ZM223.014 244.297L226.586 248.69L218.04 260.765L214.455 256.392L223.014 244.297ZM216.17 387.452L225.715 395.73L157.182 413.947L142.84 401.261L216.17 387.452ZM158.828 415.092L227.176 396.924L238.007 403.923L175.144 425.852L158.828 415.092ZM175.259 427.652L193.999 436.639L159.08 492.184L134.041 479.844L175.259 427.652ZM133.415 481.24L158.262 493.486L158.199 493.586L158.532 493.7L149.454 574.046L118.464 558.281L133.415 481.24ZM150.916 574.708L160.011 494.203L187.162 503.448L187.113 503.552L187.442 503.621L184.822 586.731L150.916 574.708ZM252.369 511.449L265.021 450.736L288.605 449.96L284.137 510.657L252.369 511.449ZM418.958 470.602L390.237 419.204L411.932 406.132L448.357 453.035L418.958 470.602ZM544.87 501.873L479.284 431.942L504.337 408.986L576.165 473.364L544.87 501.873ZM664.405 331.538L576.069 294.016L583.563 264.982L673.548 295.259L664.405 331.538ZM673.807 293.732L583.86 263.468L587.296 234.615L677.816 257.695L673.807 293.732ZM677.853 256.126L587.39 233.061L586.75 204.875L676.737 220.938L677.853 256.126ZM669.909 183.975L581.701 174.647L581.65 174.35L581.532 174.388L573.088 149.08L658.899 152.138L669.909 183.975ZM354.842 175.952L354.964 176.113L340.102 177.104L336.772 172.773L351.647 171.768L354.842 175.952ZM301.687 180.493L305.194 184.987L290.52 190.617L287.007 186.137L301.687 180.493ZM201.308 266.301L204.824 270.567L199.474 283.427L195.95 279.167L201.308 266.301ZM196.777 355.652L197.952 357.044L201.433 364.958L200.255 363.564L196.777 355.652ZM188.959 503.936L218.061 509.983L218.025 510.086L218.336 510.114L222.709 595.215L186.334 587.191L188.959 503.936ZM305.362 598.74L285.776 512.052L318.103 507.736L318.109 507.826L318.301 507.779L345.821 593.767L305.362 598.74ZM571.555 149.308L580.079 174.854L511.117 197.011L505.008 178.098L571.555 149.308ZM503.18 177.602L462.543 234.443L456.971 223.093L494.525 160.365L503.18 177.602ZM368.025 172.378L371.079 176.398L371.241 176.612L356.825 176.032L353.598 171.805L368.025 172.378ZM334.972 172.938L338.27 177.226L338.368 177.354L323.322 179.932L319.915 175.53L334.972 172.938ZM318.242 175.865L321.616 180.224L321.697 180.33L306.72 184.459L303.247 180.009L318.242 175.865ZM270.038 194.555L273.607 199.07L260.219 207.412L256.644 202.917L270.038 194.555ZM218.424 238.657L222.013 243.068L213.451 255.165L209.856 250.769L218.424 238.657ZM191.425 295.804L194.757 299.802L192.854 312.502L189.516 308.516L191.425 295.804ZM199.193 364.756L205.816 375.241L128.183 384.119L118.347 368.163L199.193 364.756ZM157.089 415.777L173.924 426.878L132.696 479.082L110.259 463.92L157.089 415.777ZM116.761 559.046L116.752 559.092L93.8745 543.221L93.7836 543.122L116.761 559.046ZM122.901 563.343L121.026 561.299L149.272 575.668L149.263 575.745L149.654 575.883L151.496 577.899L122.901 563.343ZM184.771 588.336L184.769 588.411L185.15 588.495L187.727 591.341L155.327 579.829L152.714 576.969L184.771 588.336ZM224.25 595.482L219.871 510.248L250.502 512.924L250.481 513.026L250.762 513.019L262.572 599.296L224.25 595.482ZM264.123 599.379L252.297 512.981L284.024 512.19L284.017 512.287L284.257 512.255L303.818 598.831L264.123 599.379ZM319.789 507.42L352.218 499.592L352.236 499.675L352.377 499.625L387.923 584.11L347.342 593.51L319.789 507.42ZM471.053 550.82L419.748 471.91L449.304 454.25L507.988 529.033L471.053 550.82ZM513.7 533.755L510.22 529.393L544.683 504.001L548.127 508.41L513.7 533.755ZM651.079 369.926L651.221 369.666L651.141 369.624L665.121 334.179L668.252 338.576L654.199 374.236L651.079 369.926ZM679.437 256.916L679.479 256.541L679.392 256.519L678.325 222.869L680.854 226.545L681.949 260.532L679.437 256.916ZM426.001 190.558L414.398 183.78L431.787 103.468L449.493 113.505L426.001 190.558ZM398.759 177.277L385.079 173.485L388.828 88.9976L409.54 94.4566L398.759 177.277ZM300.9 179.07L300.634 179.144L300.704 179.233L286.125 184.837L244.932 107.076L267.042 98.3772L300.9 179.07ZM240.769 213.15L229.41 223.768L162.892 164.07L179.849 148.152L240.769 213.15ZM228.348 224.868L218.275 236.357L146.779 182.388L161.827 165.168L228.348 224.868ZM194.151 279.739L190.581 292.408L190.421 292.215L190.304 292.993L106.243 264.625L111.979 244.703L194.151 279.739ZM187.937 309.336L187.749 321.246L187.406 320.837L187.596 322.373L102.179 307.264L102.666 287.599L187.937 309.336ZM187.792 323.961L189.162 335.058L188.582 334.362L189.202 336.631L104.441 327.959L102.273 308.834L187.792 323.961ZM193.446 351.868L198.452 363.256L117.508 366.667L110.147 349.403L193.446 351.868ZM109.528 465.271L131.746 480.285L131.671 480.381L131.995 480.54L117.079 557.407L89.4061 538.23L109.528 465.271ZM222.791 596.8L222.795 596.874L223.153 596.909L226.113 600.212L190.732 592.383L187.726 589.064L222.791 596.8ZM430.168 571.345L430.2 571.407L430.324 571.35L433.774 575.504L393.807 589.176L390.285 585.012L430.168 571.345ZM430.872 569.414L387.315 487.226L418.398 472.636L469.689 551.525L430.872 569.414ZM678.088 298.59L675.287 294.606L675.374 294.26L675.288 294.231L679.181 259.224L682.004 263.289L678.088 298.59ZM671.744 184.565L671.671 184.161L671.584 184.152L662.041 156.554L662.89 157.801L672.571 185.772L671.744 184.565ZM658.155 150.582L572.571 147.53L572.476 147.244L572.366 147.291L560.284 123.876L642.571 121.154L658.155 150.582ZM570.961 147.899L504.427 176.683L495.596 159.095L558.733 124.201L570.961 147.899ZM493.673 158.818L456.055 221.65L448.794 211.223L482.447 143.056L493.673 158.818ZM481.404 141.718L447.711 209.968L438.862 200.612L467.794 127.673L481.404 141.718ZM412.982 183.102L400.234 177.768L411.012 94.9659L430.378 102.759L412.982 183.102ZM364.021 85.4799L367.617 170.831L352.677 170.238L341.541 84.8486L364.021 85.4799ZM243.534 107.698L284.69 185.389L284.529 185.451L284.589 185.527L270.481 192.556L222.307 118.461L243.534 107.698ZM145.831 183.589L217.33 237.558L208.853 249.543L208.776 249.448L208.622 249.725L132.892 201.863L145.831 183.589ZM207.878 251.063L200.968 263.487L200.874 263.372L200.707 263.772L121.402 222.247L132.076 203.155L207.878 251.063ZM105.92 266.13L190.074 294.53L188.207 306.954L187.98 306.682L187.962 307.764L102.788 286.052L105.92 266.13ZM104.77 329.53L189.635 338.212L192.305 347.992L191.123 346.585L192.764 350.318L109.569 347.856L104.77 329.53ZM89.4741 445.271L141.152 401.807L155.408 414.419L155.138 414.49L155.791 414.921L109.04 462.981L89.4741 445.271ZM228.638 600.74L225.405 597.134L262.785 600.854L262.795 600.926L263.12 600.922L266.297 604.507L228.638 600.74ZM351.738 598.941L348.233 594.874L388.526 585.541L388.553 585.605L388.734 585.543L392.169 589.605L351.738 598.941ZM475.472 556.366L471.965 552.057L508.94 530.247L508.984 530.303L508.989 530.299L512.415 534.594L475.472 556.366ZM414.806 30.8195L387.693 87.117L387.387 87.0362L387.382 87.1425L365.776 84.1063L385.377 26.9482L414.806 30.8195ZM160.631 164.216L145.556 181.465L145.496 181.419L145.426 181.518L96.9291 156.203L117.026 133.172L160.631 164.216ZM200.117 265.19L194.85 277.837L194.729 277.69L194.57 278.255L112.483 243.256L120.734 223.623L200.117 265.19ZM125.865 566.568L154.424 581.106L156.281 583.14L127.714 568.579L125.865 566.568ZM435.282 574.93L431.76 570.688L470.532 552.821L470.57 552.88L470.634 552.842L474.08 557.076L435.282 574.93ZM514.654 534.951L549.068 509.616L552.502 514.002L518.118 539.296L514.654 534.951ZM582.681 479.117L582.637 479.059L610.25 447.893L613.599 452.351L586.017 483.473L582.681 479.117ZM683.55 262.836L682.456 228.872L684.975 232.532L686.085 266.479L683.55 262.836ZM684.339 228.914L682.331 225.997L676.547 194.293L678.544 197.215L684.339 228.914ZM675.839 190.551L666.173 162.617L667.003 163.836L676.677 191.776L675.839 190.551ZM557.924 122.902L494.811 157.782L483.401 141.763L542.231 101.386L557.924 122.902ZM541.223 100.224L482.427 140.578L468.64 126.35L522.341 81.1725L541.223 100.224ZM498.085 63.0203L450.266 112.185L432.412 102.065L473.822 49.6266L498.085 63.0203ZM444.483 38.2105L410.077 92.9403L409.754 92.8104L409.739 92.9278L389.198 87.5135L416.368 31.0929L444.483 38.2105ZM383.796 26.8527L364.236 83.8899L363.953 83.8501L363.957 83.9475L341.602 83.3205L353.493 26.2589L383.796 26.8527ZM95.9526 157.417L144.534 182.777L131.599 201.046L131.53 201.003L131.455 201.138L78.6395 181.84L95.9526 157.417ZM51.1081 237.82L110.5 244.323L104.795 264.137L104.694 264.103L104.655 264.353L43.3236 264.498L51.1081 237.82ZM100.737 308.828L102.887 327.8L102.735 327.784L102.831 328.15L40.398 348.206L37.6654 322.351L100.737 308.828ZM40.6534 349.731L103.219 329.632L107.979 347.809L107.806 347.804L107.976 348.203L46.9292 374.608L40.6534 349.731ZM47.4029 376.069L108.575 349.61L115.877 366.735L115.679 366.744L115.943 367.171L57.1842 399.642L47.4029 376.069ZM57.8698 401.01L116.745 368.474L126.507 384.31L126.285 384.336L126.661 384.781L71.0603 422.954L57.8698 401.01ZM88.6445 446.582L107.974 464.077L107.89 464.164L108.193 464.368L88.1242 537.136L64.0957 514.881L88.6445 446.582ZM233.368 606.01L230.155 602.429L267.791 606.193L270.991 609.799L233.368 606.01ZM310.968 605.511L351.148 600.599L354.556 604.562L314.406 609.437L310.968 605.511ZM398.373 594.577L394.867 590.43L434.819 576.764L438.29 580.946L398.373 594.577ZM553.683 513.032L550.252 508.647L581.547 480.15L584.942 484.58L553.683 513.032ZM658.41 380.05L655.261 375.704L669.309 340.057L672.431 344.431L658.41 380.05ZM679.414 300.477L683.329 265.192L686.142 269.235L682.241 304.5L679.414 300.477ZM472.385 48.9812L431.016 101.368L411.516 93.52L445.999 38.669L472.385 48.9812ZM319.615 29.2055L315.483 85.2777L315.261 85.2952L315.279 85.3779L292.38 89.5517L288.828 35.022L319.615 29.2055ZM287.322 35.3977L290.868 89.8274L290.684 89.861L290.709 89.9384L268.033 96.4321L256.942 44.2818L287.322 35.3977ZM224.523 57.2268L242.878 106.24L242.782 106.278L242.818 106.347L221.511 117.15L196.146 71.7552L224.523 57.2268ZM194.821 72.514L220.148 117.841L220.099 117.866L220.14 117.93L199.96 130.678L168.029 89.5638L194.821 72.514ZM140.732 110.748L178.772 147.067L161.75 163.046L161.696 162.998L161.642 163.06L118.107 132.065L140.732 110.748ZM77.7852 183.156L130.699 202.49L120.049 221.539L119.971 221.498L119.898 221.671L63.4828 208.67L77.7852 183.156ZM62.7711 210.075L119.297 223.102L111.079 242.657L110.991 242.62L110.93 242.831L51.6583 236.342L62.7711 210.075ZM104.414 265.884L101.303 285.673L101.187 285.644L101.18 285.933L38.6202 292.769L42.954 266.028L104.414 265.884ZM38.4484 294.327L101.142 287.477L100.659 306.995L100.527 306.972L100.564 307.3L37.6268 320.795L38.4484 294.327ZM195.495 597.645L192.506 594.342L227.865 602.165L230.839 605.479L195.495 597.645ZM356.345 604.301L352.864 600.25L393.279 590.918L396.734 595.004L356.345 604.301ZM439.799 580.372L436.293 576.148L475.076 558.3L478.546 562.566L439.799 580.372ZM672.955 342.536L669.941 338.313L678.957 302.483L681.952 306.745L672.955 342.536ZM621.701 93.0681L641.535 119.657L559.507 122.371L559.369 122.103L559.271 122.157L543.812 100.963L621.701 93.0681ZM680.77 197.768L679.953 196.572L670.296 168.68L671.1 169.863L680.77 197.768ZM620.363 91.6662L542.768 99.5309L542.59 99.2858L542.504 99.3448L523.966 80.6414L596.698 68.2635L620.363 91.6662ZM499.501 62.0077L499.252 61.8209L499.19 61.8844L475.555 48.837L536.112 29.7393L566.058 45.9676L499.501 62.0077ZM533.871 28.8423L473.706 47.8165L473.427 47.6622L473.376 47.7264L447.778 37.7229L501.547 16.4493L533.871 28.8423ZM445.686 36.9058L445.379 36.7856L445.339 36.8494L418.172 29.9718L464.849 7.33457L499.039 15.7965L445.686 36.9058ZM423.692 2.37287L384.698 25.3165L384.34 25.2694L384.318 25.3337L355.194 24.7629L387.31 1.77761L423.692 2.37287ZM352.637 24.7128L352.258 24.7053L352.244 24.7686L322.686 27.3095L347.575 5.27823L384.348 2.01828L352.637 24.7128ZM320.132 27.5287L319.736 27.5631L319.731 27.6269L290.058 33.2332L307.942 12.8346L344.665 5.81299L320.132 27.5287ZM194.295 70.9853L194.04 71.1157L194.075 71.1776L167.11 88.3381L160.822 79.61L193.398 58.8475L194.295 70.9853ZM159.574 80.4898L165.819 89.1596L165.794 89.1754L165.839 89.2342L140.787 108.688L140.74 108.642L140.577 108.795L129.355 103.979L159.574 80.4898ZM99.1936 132.298L115.273 132.857L95.5357 155.475L95.4787 155.445L95.2682 155.742L75.1342 159.876L99.1936 132.298ZM73.5175 161.77L93.9725 157.57L77.1523 181.297L77.09 181.274L76.9071 181.6L52.9056 190.856L73.5175 161.77ZM51.3491 193.095L75.7351 183.691L61.9327 208.313L61.8658 208.298L61.7209 208.64L34.3385 223.409L51.3491 193.095ZM32.9813 225.878L60.7686 210.891L50.074 236.168L50.0023 236.161L49.8995 236.513L19.7254 257.121L32.9813 225.878ZM18.6601 259.699L49.225 238.824L41.7321 264.502L41.6552 264.502L41.5974 264.858L9.31431 291.542L18.6601 259.699ZM8.58524 294.128L41.2264 267.147L37.0462 292.941L36.9642 292.95L36.953 293.307L3.30919 326.227L8.58524 294.128ZM2.93031 328.735L36.8847 295.511L36.0902 321.124L36.0028 321.143L36.0401 321.495L1.82998 360.691L2.93031 328.735ZM1.78602 363.064L36.2591 323.567L38.9141 348.683L38.8227 348.712L38.9093 349.055L4.96106 394.467L1.78602 363.064ZM5.2267 396.663L39.3902 350.963L45.5101 375.222L45.4159 375.263L45.5518 375.591L12.7179 427.1L5.2267 396.663ZM13.2585 429.093L46.2658 377.311L55.8398 400.385L55.7441 400.438L55.9285 400.745L25.0449 458.128L13.2585 429.093ZM200.241 602.88L197.272 599.604L232.595 607.435L235.559 610.736L200.241 602.88ZM238.091 611.27L234.885 607.7L272.488 611.487L275.674 615.083L238.091 611.27ZM277.881 615.273L274.541 611.5L313.756 611.015L317.073 614.81L277.881 615.273ZM319.046 614.748L315.624 610.831L355.755 605.958L355.79 605.998L359.152 609.905L319.046 614.748ZM360.943 609.644L357.472 605.611L397.845 596.319L401.283 600.388L360.943 609.644ZM440.809 581.591L479.542 563.791L483.003 568.041L444.298 585.798L440.809 581.591ZM554.628 514.239L585.874 485.797L589.252 490.211L558.043 518.606L554.628 514.239ZM590.328 489.104L587.007 484.765L586.964 484.708L614.535 453.598L617.868 458.04L590.328 489.104ZM618.834 456.782L615.569 452.431L615.528 452.376L638.947 419.156L642.22 423.598L618.834 456.782ZM643.063 422.169L639.836 417.788L658.702 383.057L661.897 387.474L643.063 422.169ZM659.51 381.569L659.473 381.517L673.487 345.913L676.594 350.276L662.597 385.838L659.51 381.569ZM686.378 310.387L683.568 306.388L687.466 271.143L690.255 275.163L686.378 310.387Z" fill="white" fill-opacity="0.25" />
            </svg>
        </motion.div>
    );
}

export default Roll;