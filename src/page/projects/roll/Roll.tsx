import { motion } from "framer-motion";

import './roll.scss';

function Roll() {
    return (
        <motion.div className="roll-2"
            initial={{
                rotate: 360,
                y: 250,
                opacity: 0.1
            }}
            animate={{
                opacity: 1,
                y: 0,
                scale: 1
            }}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="275" height="272" viewBox="0 0 275 272" fill="none">
                <path d="M274.067 129.66C273.811 129.66 273.573 129.503 273.477 129.253L247.073 59.3802C246.951 59.0574 247.111 58.6969 247.434 58.5689C247.742 58.4468 248.111 58.5951 248.248 58.9179L254.23 73.5182C254.232 73.524 254.235 73.5299 254.235 73.5386L274.657 128.811C274.779 129.137 274.614 129.497 274.288 129.62C274.215 129.649 274.14 129.66 274.067 129.66Z" fill="white" fill-opacity="0.25" />
                <path d="M253.644 74.3876C253.467 74.3876 253.29 74.312 253.168 74.1696L201.722 14.6253C201.501 14.3694 201.521 13.9827 201.768 13.7529C202.015 13.5203 202.399 13.5261 202.643 13.7646L248.108 58.7085C248.166 58.7666 248.215 58.8393 248.247 58.9178L254.229 73.5182C254.345 73.8032 254.238 74.1317 253.976 74.2946C253.871 74.3557 253.758 74.3876 253.644 74.3876ZM213.164 25.9398L251.597 70.4213L247.128 59.5139L213.164 25.9398Z" fill="white" fill-opacity="0.25" />
                <path d="M65.477 22.0549C65.1978 22.0549 64.9448 21.8688 64.8692 21.5926C64.7791 21.2669 64.9594 20.9325 65.2763 20.8249L125.771 0.679242C125.917 0.632731 126.068 0.635609 126.202 0.690874L137.583 5.13118C137.842 5.23295 138.005 5.49173 137.982 5.768C137.961 6.04424 137.761 6.27688 137.487 6.33503L65.6107 22.0404C65.5671 22.0491 65.5206 22.0549 65.477 22.0549ZM125.955 1.94998L76.9223 18.2776L135.181 5.547L125.955 1.94998Z" fill="white" fill-opacity="0.25" />
                <path d="M202.199 14.8433C202.173 14.8433 202.144 14.8404 202.118 14.8375L137.272 6.34365L125.743 1.86555C125.44 1.74924 125.277 1.42067 125.365 1.1095C125.449 0.798368 125.76 0.603529 126.077 0.655876L202.304 13.59C202.644 13.6482 202.874 13.9652 202.824 14.3054C202.775 14.6194 202.507 14.8433 202.199 14.8433ZM131.945 2.93273L137.583 5.13107L169.462 9.29804L131.945 2.93273Z" fill="white" fill-opacity="0.25" />
                <path d="M148.729 271.84C148.485 271.84 148.252 271.695 148.15 271.459C148.02 271.16 148.142 270.808 148.43 270.654L220.306 232.031C220.562 231.901 220.87 231.947 221.065 232.154C221.26 232.363 221.292 232.674 221.144 232.918L209.762 251.392C209.684 251.517 209.564 251.613 209.425 251.66L148.93 271.808C148.863 271.828 148.796 271.84 148.729 271.84ZM218.838 234.253L155.49 268.293L208.808 250.534L218.838 234.253Z" fill="white" fill-opacity="0.25" />
                <path d="M209.224 251.692C209.084 251.692 208.948 251.645 208.831 251.555C208.581 251.357 208.52 251.002 208.686 250.729L220.067 232.255C220.105 232.194 220.155 232.142 220.21 232.095L259.242 200.571C259.504 200.359 259.882 200.394 260.109 200.641C260.333 200.891 260.321 201.275 260.083 201.511L209.669 251.508C209.547 251.63 209.384 251.692 209.224 251.692ZM221.085 233.009L212.536 246.888L250.408 209.327L221.085 233.009Z" fill="white" fill-opacity="0.25" />
                <path d="M260.682 157.8C260.644 157.8 260.606 157.797 260.568 157.788C260.289 157.739 260.077 157.506 260.054 157.221L253.017 73.809C252.99 73.4949 253.2 73.21 253.508 73.1402C253.837 73.0791 254.127 73.2419 254.235 73.5385L274.657 128.811C274.718 128.971 274.709 129.146 274.637 129.3L261.252 157.439C261.144 157.663 260.923 157.8 260.682 157.8ZM254.665 78.3366L261.115 154.79L273.383 128.997L254.665 78.3366Z" fill="white" fill-opacity="0.25" />
                <path d="M259.638 201.694C259.615 201.694 259.592 201.694 259.568 201.691C259.243 201.653 258.998 201.374 259.007 201.048L260.051 157.154C260.054 157.064 260.074 156.977 260.112 156.898L273.497 128.759C273.636 128.468 273.974 128.334 274.265 128.43C274.567 128.532 274.747 128.84 274.686 129.154L260.257 201.188C260.196 201.484 259.935 201.694 259.638 201.694ZM261.31 157.317L260.441 193.843L272.447 133.903L261.31 157.317Z" fill="white" fill-opacity="0.25" />
                <path d="M220.605 233.218C220.463 233.218 220.32 233.168 220.204 233.073C219.971 232.884 219.907 232.555 220.047 232.29L260.123 156.872C260.263 156.616 260.562 156.482 260.841 156.558C261.124 156.634 261.318 156.892 261.313 157.183L260.269 201.077C260.263 201.263 260.178 201.438 260.033 201.554L221.001 233.078C220.887 233.171 220.745 233.218 220.605 233.218ZM259.987 159.818L222.612 230.156L259.015 200.755L259.987 159.818Z" fill="white" fill-opacity="0.25" />
                <path d="M0.63166 144.086C0.558976 144.086 0.486275 144.074 0.416479 144.048C0.122793 143.941 -0.0487855 143.635 0.0122861 143.33L14.4527 71.2965C14.4963 71.0813 14.6505 70.9039 14.8569 70.8283C15.0605 70.7498 15.296 70.7935 15.4676 70.9302L32.8362 84.9315C33.0747 85.1234 33.1416 85.4578 32.9932 85.7253L1.18415 143.758C1.07074 143.964 0.85558 144.086 0.63166 144.086ZM15.485 72.5644L2.05942 139.535L31.6324 85.5829L15.485 72.5644Z" fill="white" fill-opacity="0.25" />
                <path d="M32.4408 86.054C32.2983 86.054 32.1587 86.0046 32.0453 85.9144L14.6767 71.9131C14.5371 71.7996 14.4527 71.6339 14.4411 71.4536C14.4324 71.2762 14.4993 71.0989 14.6272 70.9738L65.0321 20.976C65.2502 20.755 65.6021 20.7318 65.8492 20.915C66.0993 21.0981 66.1807 21.4384 66.0382 21.7146L33.002 85.7137C32.9148 85.8795 32.7577 86.0016 32.5716 86.0394C32.528 86.0481 32.4844 86.054 32.4408 86.054ZM16.0172 71.3722L32.2343 84.4459L63.0809 24.6865L16.0172 71.3722Z" fill="white" fill-opacity="0.25" />
                <path d="M72.5137 258.9C72.348 258.9 72.1881 258.836 72.0717 258.717L26.5957 213.776C26.3747 213.561 26.3456 213.221 26.5201 212.968C26.6975 212.715 27.0232 212.633 27.3052 212.755L84.1655 239.223C84.3284 239.298 84.4505 239.441 84.5029 239.615C84.5552 239.787 84.529 239.973 84.436 240.127L73.0517 258.601C72.9499 258.764 72.7813 258.871 72.5893 258.894C72.5632 258.897 72.5399 258.9 72.5137 258.9ZM30.0648 215.433L72.3916 257.263L82.9879 240.069L30.0648 215.433Z" fill="white" fill-opacity="0.25" />
                <path d="M148.729 271.84C148.694 271.84 148.659 271.837 148.624 271.831L72.4094 258.891C72.2029 258.856 72.0255 258.72 71.9383 258.528C71.854 258.339 71.8656 258.118 71.9761 257.938L83.3604 239.464C83.5291 239.188 83.878 239.083 84.1746 239.228L149.005 270.642C149.287 270.779 149.427 271.102 149.331 271.401C149.244 271.666 149 271.84 148.729 271.84ZM73.5406 257.804L144.469 269.845L84.1368 240.613L73.5406 257.804Z" fill="white" fill-opacity="0.25" />
                <path d="M253.645 74.3876C253.552 74.3876 253.459 74.3673 253.368 74.3237L188.538 42.9188C188.227 42.7676 188.096 42.3924 188.244 42.0813L201.629 13.9419C201.722 13.75 201.902 13.6162 202.115 13.5872C202.327 13.5697 202.539 13.6395 202.676 13.7995L254.122 73.3437C254.316 73.5705 254.328 73.902 254.145 74.1405C254.023 74.3004 253.837 74.3876 253.645 74.3876ZM189.651 42.058L251.17 71.8578L202.353 15.3552L189.651 42.058Z" fill="white" fill-opacity="0.25" />
                <path d="M188.814 42.9827C188.683 42.9827 188.555 42.942 188.447 42.8664L136.987 6.23323C136.751 6.06457 136.661 5.75633 136.766 5.48882C136.87 5.2213 137.164 5.07298 137.435 5.09335L202.28 13.5872C202.481 13.6134 202.655 13.7326 202.754 13.91C202.85 14.0874 202.856 14.2996 202.768 14.4828L189.384 42.6222C189.302 42.7909 189.154 42.9159 188.974 42.9624C188.921 42.977 188.866 42.9827 188.814 42.9827ZM139.781 6.67227L188.566 41.4009L201.256 14.7242L139.781 6.67227Z" fill="white" fill-opacity="0.25" />
                <path d="M39.4783 169.463C39.3591 169.463 39.2369 169.428 39.1323 169.361L0.28613 143.984C0.00989385 143.804 -0.0802573 143.441 0.0796723 143.153L31.8888 85.1206C32.0225 84.8764 32.3104 84.7513 32.5721 84.8066C32.8455 84.8647 33.0461 85.0915 33.0694 85.3707L40.1064 168.78C40.1268 169.018 40.0075 169.251 39.8011 169.373C39.7022 169.434 39.5888 169.463 39.4783 169.463ZM1.46672 143.246L38.7397 167.596L31.9876 87.5603L1.46672 143.246Z" fill="white" fill-opacity="0.25" />
                <path d="M27.0378 213.959C26.7761 213.959 26.5405 213.796 26.4475 213.552L0.0412109 143.679C-0.0547588 143.423 0.0237609 143.135 0.236038 142.964C0.451232 142.789 0.744928 142.781 0.977542 142.926L39.8237 168.303C40.0534 168.454 40.1581 168.736 40.0854 169.001L27.6455 213.497C27.5729 213.761 27.3373 213.948 27.0669 213.959H27.0378ZM1.90515 145.04L26.9476 211.307L38.7448 169.108L1.90515 145.04Z" fill="white" fill-opacity="0.25" />
                <path d="M83.8982 240.427C83.8081 240.427 83.7179 240.406 83.6307 240.368L26.7703 213.901C26.4912 213.77 26.3458 213.456 26.4301 213.16L38.87 168.663C38.9368 168.422 39.1404 168.245 39.3876 168.207C39.6318 168.189 39.8819 168.288 40.0127 168.498L84.4332 239.461C84.5815 239.697 84.5554 240.005 84.3722 240.214C84.2471 240.351 84.0756 240.427 83.8982 240.427ZM27.791 212.982L82.232 238.324L39.7016 170.376L27.791 212.982Z" fill="white" fill-opacity="0.25" />
                <path d="M148.729 271.84C148.595 271.84 148.459 271.796 148.348 271.712C148.15 271.564 148.06 271.314 148.113 271.072L156.106 235.195C156.17 234.916 156.412 234.713 156.697 234.701L220.579 231.956C220.827 231.93 221.135 232.136 221.213 232.421C221.292 232.703 221.164 233.003 220.905 233.142L149.029 271.764C148.933 271.814 148.831 271.84 148.729 271.84ZM157.235 235.943L149.645 270.002L217.881 233.334L157.235 235.943Z" fill="white" fill-opacity="0.25" />
                <path d="M148.729 271.84C148.636 271.84 148.54 271.82 148.453 271.776L83.6222 240.363C83.3663 240.238 83.2238 239.955 83.2791 239.673C83.3344 239.391 83.5728 239.185 83.8607 239.164L156.685 234.701C156.886 234.701 157.078 234.774 157.203 234.922C157.331 235.073 157.383 235.277 157.339 235.469L149.346 271.346C149.302 271.535 149.177 271.692 149.003 271.776C148.918 271.82 148.822 271.84 148.729 271.84ZM86.3411 240.278L148.287 270.293L155.926 236.012L86.3411 240.278Z" fill="white" fill-opacity="0.25" />
                <path d="M104.317 47.4376C104.082 47.4376 103.864 47.3067 103.756 47.0945C103.643 46.8735 103.669 46.6059 103.826 46.4111L136.862 5.32304C137.074 5.06133 137.452 5.0119 137.72 5.20381L189.18 41.837C189.398 41.9941 189.494 42.2703 189.419 42.5291C189.346 42.785 189.116 42.9682 188.846 42.9827L104.349 47.4375L104.317 47.4376ZM137.473 6.57632L105.693 46.1029L186.976 41.8167L137.473 6.57632Z" fill="white" fill-opacity="0.25" />
                <path d="M32.4404 86.054C32.2775 86.054 32.1176 85.9929 31.9984 85.8737C31.8006 85.6789 31.7541 85.3793 31.8791 85.1322L64.9154 21.1331C64.9968 20.9761 65.1422 20.8597 65.3166 20.8132C65.4911 20.7638 65.6743 20.7987 65.8226 20.8946L104.663 46.2774C104.849 46.3995 104.957 46.6118 104.948 46.8328C104.936 47.0567 104.811 47.2573 104.616 47.3619L32.7399 85.9783C32.6439 86.0278 32.5421 86.054 32.4404 86.054ZM65.7179 22.334L33.935 83.9051L103.084 46.7542L65.7179 22.334Z" fill="white" fill-opacity="0.25" />
                <path d="M104.317 47.4376C104.198 47.4376 104.079 47.4027 103.971 47.3358L65.1308 21.9531C64.9186 21.8135 64.811 21.5605 64.8575 21.3105C64.9011 21.0604 65.093 20.8627 65.3431 20.8074L137.22 5.10205C137.481 5.04971 137.749 5.16022 137.888 5.38702C138.031 5.61383 138.013 5.90463 137.845 6.11399L104.809 47.2021C104.684 47.3562 104.503 47.4376 104.317 47.4376ZM67.082 21.7176L104.183 45.9662L135.742 6.71587L67.082 21.7176Z" fill="white" fill-opacity="0.25" />
                <path d="M260.682 157.8C260.481 157.8 260.289 157.704 260.167 157.535L224.38 107.389C224.211 107.153 224.226 106.831 224.418 106.61L253.168 73.3437C253.334 73.1547 253.595 73.0791 253.84 73.1576C254.081 73.2362 254.252 73.4513 254.273 73.7043L261.31 157.116C261.333 157.398 261.167 157.663 260.9 157.762C260.827 157.788 260.754 157.8 260.682 157.8ZM225.697 107.06L259.859 154.933L253.142 75.3036L225.697 107.06Z" fill="white" fill-opacity="0.25" />
                <path d="M224.895 107.654C224.875 107.654 224.851 107.654 224.831 107.651C224.627 107.63 224.444 107.511 224.345 107.331L188.265 42.66C188.128 42.4186 188.166 42.1191 188.355 41.9185C188.544 41.7207 188.838 41.6626 189.091 41.7848L253.921 73.1897C254.096 73.274 254.224 73.4368 254.261 73.6287C254.302 73.8207 254.25 74.0213 254.122 74.1696L225.372 107.436C225.253 107.575 225.078 107.654 224.895 107.654ZM190.341 43.7911L225.006 105.929L252.63 73.966L190.341 43.7911Z" fill="white" fill-opacity="0.25" />
                <path d="M220.605 233.218C220.591 233.218 220.576 233.218 220.562 233.215C220.315 233.2 220.099 233.038 220.015 232.805L199.596 177.527C199.535 177.367 199.544 177.189 199.616 177.035C199.692 176.881 199.826 176.765 199.986 176.709L260.481 156.57C260.731 156.491 260.999 156.564 261.164 156.761C261.33 156.959 261.359 157.235 261.24 157.465L221.164 232.883C221.053 233.09 220.838 233.218 220.605 233.218ZM201.004 177.701L220.71 231.049L259.385 158.265L201.004 177.701Z" fill="white" fill-opacity="0.25" />
                <path d="M156.723 235.963C156.49 235.963 156.275 235.835 156.165 235.626C156.051 235.41 156.072 235.149 156.217 234.954L199.681 176.93C199.82 176.747 200.044 176.654 200.277 176.683C200.507 176.718 200.698 176.872 200.777 177.09L221.196 232.369C221.269 232.558 221.242 232.767 221.132 232.936C221.019 233.105 220.835 233.209 220.632 233.218L156.749 235.963H156.723ZM199.998 178.614L158.026 234.646L219.713 231.994L199.998 178.614Z" fill="white" fill-opacity="0.25" />
                <path d="M200.187 177.939C200.021 177.939 199.858 177.873 199.736 177.75C199.567 177.579 199.512 177.326 199.591 177.099L224.299 106.813C224.377 106.592 224.572 106.432 224.808 106.397C225.032 106.377 225.273 106.464 225.41 106.656L261.197 156.802C261.313 156.965 261.345 157.174 261.281 157.363C261.22 157.555 261.072 157.704 260.883 157.768L200.387 177.907C200.321 177.928 200.254 177.939 200.187 177.939ZM225.087 108.378L201.207 176.302L259.673 156.84L225.087 108.378Z" fill="white" fill-opacity="0.25" />
                <path d="M39.478 169.463C39.4198 169.463 39.3588 169.454 39.3006 169.437C39.0505 169.364 38.8703 169.143 38.8499 168.884L31.8129 85.4753C31.7925 85.2398 31.9059 85.013 32.1066 84.8879C32.3072 84.76 32.5602 84.757 32.7666 84.8821L81.4675 114.065C81.6245 114.158 81.7321 114.313 81.7641 114.487C81.799 114.664 81.7554 114.848 81.6449 114.99L39.9781 169.216C39.856 169.376 39.6699 169.463 39.478 169.463ZM33.1737 86.5977L39.9694 167.157L80.2142 114.784L33.1737 86.5977Z" fill="white" fill-opacity="0.25" />
                <path d="M81.1448 115.237C81.0313 115.237 80.9209 115.208 80.8191 115.147L32.1182 85.9639C31.9234 85.8475 31.8042 85.6353 31.81 85.4085C31.8158 85.1817 31.9437 84.9752 32.1415 84.8676L104.018 46.2512C104.251 46.132 104.527 46.1611 104.725 46.3268C104.922 46.4926 104.998 46.7659 104.914 47.0102L81.7409 114.81C81.6798 114.99 81.5402 115.133 81.3628 115.199C81.2902 115.226 81.2174 115.237 81.1448 115.237ZM33.7175 85.4521L80.7987 113.664L103.201 48.1239L33.7175 85.4521Z" fill="white" fill-opacity="0.25" />
                <path d="M156.723 235.963C156.528 235.963 156.342 235.873 156.223 235.716L115.201 182.147C115.059 181.961 115.03 181.711 115.129 181.499C115.228 181.286 115.434 181.147 115.67 181.132L200.155 176.678C200.335 176.666 200.629 176.797 200.742 177.012C200.858 177.227 200.838 177.492 200.693 177.686L157.229 235.71C157.11 235.867 156.921 235.963 156.723 235.963ZM116.932 182.33L156.717 234.288L198.872 178.009L116.932 182.33Z" fill="white" fill-opacity="0.25" />
                <path d="M83.8982 240.427C83.683 240.427 83.4824 240.316 83.366 240.133C83.241 239.938 83.2352 239.694 83.3457 239.493L115.149 181.461C115.251 181.272 115.44 181.15 115.655 181.135C115.864 181.08 116.074 181.211 116.202 181.379L157.223 234.948C157.365 235.134 157.394 235.381 157.296 235.594C157.2 235.806 156.993 235.948 156.76 235.963L83.936 240.427H83.8982ZM115.789 182.915L85.0003 239.095L155.501 234.774L115.789 182.915Z" fill="white" fill-opacity="0.25" />
                <path d="M83.8981 240.426C83.68 240.426 83.4794 240.316 83.363 240.13L38.9425 169.166C38.8117 168.957 38.8146 168.687 38.9542 168.48C39.0908 168.277 39.3409 168.169 39.5823 168.21L115.806 181.141C116.007 181.176 116.181 181.304 116.268 181.487C116.359 181.673 116.353 181.888 116.254 182.066L84.4506 240.098C84.343 240.296 84.1394 240.421 83.9155 240.426H83.8981ZM40.757 169.69L83.8632 238.548L114.721 182.237L40.757 169.69Z" fill="white" fill-opacity="0.25" />
                <path d="M115.702 182.394C115.667 182.394 115.632 182.391 115.597 182.386L39.3731 169.454C39.155 169.417 38.9718 169.268 38.8904 169.062C38.809 168.855 38.8439 168.623 38.9776 168.448L80.6444 114.222C80.7752 114.051 80.9933 113.943 81.1998 113.978C81.415 113.999 81.6069 114.126 81.7057 114.318L116.263 181.475C116.37 181.688 116.353 181.944 116.21 182.136C116.091 182.298 115.899 182.394 115.702 182.394ZM40.6177 168.384L114.565 180.932L81.0398 115.778L40.6177 168.384Z" fill="white" fill-opacity="0.25" />
                <path d="M115.702 182.394C115.466 182.391 115.248 182.261 115.141 182.051L80.5837 114.894C80.4878 114.711 80.4907 114.49 80.5896 114.307C80.6884 114.124 80.8687 114.001 81.0752 113.978L155.708 105.717C155.938 105.699 156.171 105.798 156.302 105.99C156.432 106.185 156.444 106.435 156.336 106.642L116.26 182.06C116.15 182.266 115.935 182.394 115.702 182.394ZM82.1249 115.133L115.711 180.402L154.662 107.104L82.1249 115.133Z" fill="white" fill-opacity="0.25" />
                <path d="M115.701 182.394C115.486 182.394 115.286 182.284 115.169 182.104C115.047 181.912 115.038 181.667 115.143 181.467L155.219 106.048C155.327 105.851 155.53 105.723 155.754 105.714C156.001 105.743 156.193 105.819 156.313 106.011L200.721 176.974C200.841 177.163 200.849 177.402 200.745 177.599C200.643 177.797 200.442 177.928 200.218 177.94L115.733 182.394H115.701ZM155.821 107.604L116.78 181.074L199.084 176.736L155.821 107.604Z" fill="white" fill-opacity="0.25" />
                <path d="M200.186 177.94C199.971 177.94 199.768 177.829 199.651 177.643L155.243 106.679C155.12 106.485 155.115 106.237 155.228 106.037C155.341 105.833 155.589 105.781 155.783 105.714L224.9 106.392C225.104 106.395 225.293 106.493 225.412 106.659C225.528 106.828 225.558 107.04 225.491 107.232L200.783 177.518C200.701 177.748 200.498 177.907 200.256 177.937C200.233 177.937 200.21 177.94 200.186 177.94ZM156.923 106.988L200.027 175.863L224.008 107.645L156.923 106.988Z" fill="white" fill-opacity="0.25" />
                <path d="M224.895 107.654H224.889L155.772 106.976C155.554 106.973 155.35 106.857 155.237 106.671C155.123 106.482 155.118 106.249 155.217 106.054L188.253 42.061C188.36 41.8545 188.573 41.7237 188.802 41.7207H188.814C189.044 41.7207 189.253 41.8458 189.364 42.0435L225.444 106.714C225.555 106.912 225.552 107.151 225.438 107.345C225.322 107.537 225.119 107.654 224.895 107.654ZM156.807 105.726L223.816 106.38L188.834 43.6864L156.807 105.726Z" fill="white" fill-opacity="0.25" />
                <path d="M155.778 106.976C155.594 106.976 155.42 106.898 155.301 106.758L103.84 47.2195C103.683 47.0363 103.643 46.7804 103.736 46.5594C103.832 46.3384 104.044 46.1901 104.285 46.1756L188.782 41.7207C188.953 41.7353 189.221 41.8196 189.343 42.0086C189.465 42.2005 189.477 42.439 189.375 42.6425L156.339 106.636C156.243 106.822 156.06 106.947 155.853 106.97C155.827 106.973 155.801 106.976 155.778 106.976ZM105.637 47.3678L155.644 105.226L187.75 43.0409L105.637 47.3678Z" fill="white" fill-opacity="0.25" />
                <path d="M81.1446 115.237C80.9556 115.237 80.7724 115.15 80.6532 115.002C80.5165 114.833 80.4788 114.606 80.5485 114.403L103.721 46.6031C103.794 46.3879 103.974 46.2309 104.198 46.1872C104.408 46.1407 104.646 46.2221 104.794 46.3937L156.255 105.932C156.409 106.11 156.45 106.357 156.365 106.575C156.281 106.793 156.08 106.947 155.848 106.973L81.2144 115.234C81.1912 115.237 81.1679 115.237 81.1446 115.237ZM104.559 48.0512L82.0635 113.871L154.516 105.851L104.559 48.0512Z" fill="white" fill-opacity="0.25" />
            </svg>
        </motion.div>
    );
}

export default Roll;