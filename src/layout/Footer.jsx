import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark text-white rounded-t-45 px-60 py-55">
      <div className="flex items-center justify-between w-full mb-[4.125rem]">
        <div>
          <svg
            width="180"
            height="30"
            viewBox="0 0 180 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_341_656)">
              <path
                d="M14.7573 4.95854L29.1886 0.78125L24.9778 15.0001L29.1886 29.1788L14.7573 25.0416L0.285156 29.1788L4.53687 15.0001L0.285156 0.78125L14.7573 4.95854Z"
                fill="white"
              />
            </g>
            <path
              d="M40.1094 25.4726V2.91699H49.2268C50.6261 2.91699 51.8723 3.19625 52.9655 3.75477C54.0806 4.29181 54.9442 5.06514 55.5564 6.07477C56.1905 7.06292 56.5075 8.25514 56.5075 9.65144V10.0703C56.5075 11.4666 56.1796 12.6696 55.5236 13.6792C54.8896 14.6888 54.0259 15.4622 52.9327 15.9992C51.8395 16.5363 50.6042 16.8048 49.2268 16.8048H43.6514V25.4726H40.1094ZM43.6514 13.647H48.866C50.1123 13.647 51.1071 13.3248 51.8505 12.6803C52.5938 12.0359 52.9655 11.1551 52.9655 10.0381V9.71588C52.9655 8.57736 52.5938 7.68588 51.8505 7.04144C51.1071 6.39699 50.1123 6.07477 48.866 6.07477H43.6514V13.647Z"
              fill="white"
            />
            <path
              d="M67.0964 25.9237C65.4784 25.9237 64.0354 25.6014 62.7673 24.957C61.521 24.2911 60.5371 23.3459 59.8156 22.1214C59.0941 20.897 58.7333 19.447 58.7333 17.7714V17.2881C58.7333 15.6125 59.0941 14.1733 59.8156 12.9703C60.5371 11.7459 61.521 10.8007 62.7673 10.1348C64.0354 9.46884 65.4784 9.13588 67.0964 9.13588C68.7143 9.13588 70.1574 9.46884 71.4255 10.1348C72.6936 10.8007 73.6885 11.7459 74.41 12.9703C75.1315 14.1733 75.4923 15.6125 75.4923 17.2881V17.7714C75.4923 19.447 75.1315 20.897 74.41 22.1214C73.6885 23.3459 72.6936 24.2911 71.4255 24.957C70.1574 25.6014 68.7143 25.9237 67.0964 25.9237ZM67.0964 22.9592C68.5832 22.9592 69.7857 22.4974 70.704 21.5737C71.6442 20.6285 72.1142 19.3288 72.1142 17.6748V17.3848C72.1142 15.7307 71.6551 14.4418 70.7368 13.5181C69.8185 12.5729 68.605 12.1003 67.0964 12.1003C65.6315 12.1003 64.429 12.5729 63.4888 13.5181C62.5705 14.4418 62.1114 15.7307 62.1114 17.3848V17.6748C62.1114 19.3288 62.5705 20.6285 63.4888 21.5737C64.429 22.4974 65.6315 22.9592 67.0964 22.9592Z"
              fill="white"
            />
            <path
              d="M86.3227 25.9237C84.2675 25.9237 82.5621 25.4726 81.2065 24.5703C79.8509 23.6681 79.0201 22.304 78.714 20.4781L81.8624 19.737C82.0373 20.6177 82.3325 21.3159 82.7479 21.8314C83.1633 22.347 83.6772 22.7122 84.2894 22.927C84.9234 23.1418 85.6012 23.2492 86.3227 23.2492C87.3941 23.2492 88.214 23.0451 88.7825 22.637C89.3728 22.2288 89.668 21.7026 89.668 21.0581C89.668 20.4137 89.3947 19.9411 88.848 19.6403C88.3014 19.3396 87.4925 19.0926 86.4211 18.8992L85.306 18.7059C84.2128 18.5126 83.218 18.2333 82.3216 17.8681C81.4251 17.5029 80.7146 16.9981 80.1898 16.3537C79.6651 15.7092 79.4027 14.8822 79.4027 13.8725C79.4027 12.3688 79.9712 11.2088 81.1081 10.3925C82.245 9.55477 83.7537 9.13588 85.634 9.13588C87.4487 9.13588 88.9355 9.54403 90.0943 10.3603C91.275 11.1551 92.0402 12.24 92.3901 13.6148L89.2416 14.4848C89.0448 13.5181 88.6294 12.8414 87.9953 12.4548C87.3613 12.0466 86.5742 11.8425 85.634 11.8425C84.7157 11.8425 83.9942 12.0144 83.4694 12.3581C82.9447 12.6803 82.6823 13.1422 82.6823 13.7437C82.6823 14.3881 82.9338 14.8607 83.4367 15.1614C83.9614 15.4622 84.661 15.6877 85.5356 15.8381L86.6835 16.0314C87.8423 16.2248 88.9027 16.4933 89.8647 16.837C90.8268 17.1807 91.5811 17.6748 92.1277 18.3192C92.6961 18.9637 92.9804 19.8229 92.9804 20.897C92.9804 22.4866 92.3791 23.7218 91.1766 24.6025C89.9741 25.4833 88.3561 25.9237 86.3227 25.9237Z"
              fill="white"
            />
            <path
              d="M96.9288 25.4726V9.58699H100.307V25.4726H96.9288ZM98.6342 7.42811C97.9782 7.42811 97.4207 7.22403 96.9616 6.81588C96.5243 6.38625 96.3056 5.83847 96.3056 5.17255C96.3056 4.50662 96.5243 3.96959 96.9616 3.56144C97.4207 3.13181 97.9782 2.91699 98.6342 2.91699C99.312 2.91699 99.8695 3.13181 100.307 3.56144C100.744 3.96959 100.963 4.50662 100.963 5.17255C100.963 5.83847 100.744 6.38625 100.307 6.81588C99.8695 7.22403 99.312 7.42811 98.6342 7.42811Z"
              fill="white"
            />
            <path
              d="M111.387 25.4726C110.403 25.4726 109.616 25.1825 109.026 24.6025C108.458 24.0225 108.173 23.2492 108.173 22.2826V12.3903H103.713V9.58699H108.173V4.33477H111.551V9.58699H116.372V12.3903H111.551V21.7025C111.551 22.347 111.857 22.6692 112.47 22.6692H115.848V25.4726H111.387Z"
              fill="white"
            />
            <path
              d="M120.341 25.4726V9.58699H123.719V25.4726H120.341ZM122.046 7.42811C121.39 7.42811 120.833 7.22403 120.374 6.81588C119.936 6.38625 119.718 5.83847 119.718 5.17255C119.718 4.50662 119.936 3.96959 120.374 3.56144C120.833 3.13181 121.39 2.91699 122.046 2.91699C122.724 2.91699 123.282 3.13181 123.719 3.56144C124.156 3.96959 124.375 4.50662 124.375 5.17255C124.375 5.83847 124.156 6.38625 123.719 6.81588C123.282 7.22403 122.724 7.42811 122.046 7.42811Z"
              fill="white"
            />
            <path
              d="M132.471 25.4726L127.027 9.58699H130.602L134.898 23.0237H135.423L139.719 9.58699H143.294L137.85 25.4726H132.471Z"
              fill="white"
            />
            <path
              d="M152.77 25.7626C151.546 25.7626 150.453 25.494 149.491 24.957C148.528 24.42 147.774 23.6574 147.228 22.6692C146.681 21.6811 146.408 20.4996 146.408 19.1248V9.58699H149.786V18.8992C149.786 20.274 150.136 21.2944 150.835 21.9603C151.535 22.6048 152.508 22.927 153.754 22.927C155.131 22.927 156.236 22.4759 157.066 21.5737C157.919 20.65 158.346 19.3288 158.346 17.6103V9.58699H161.724V25.4726H158.411V23.0881H157.886C157.58 23.7326 157.034 24.3448 156.247 24.9248C155.459 25.4833 154.301 25.7626 152.77 25.7626Z"
              fill="white"
            />
            <path
              d="M173.342 25.9237C171.287 25.9237 169.581 25.4726 168.226 24.5703C166.87 23.6681 166.039 22.304 165.733 20.4781L168.882 19.737C169.056 20.6177 169.352 21.3159 169.767 21.8314C170.183 22.347 170.696 22.7122 171.309 22.927C171.943 23.1418 172.62 23.2492 173.342 23.2492C174.413 23.2492 175.233 23.0451 175.802 22.637C176.392 22.2288 176.687 21.7026 176.687 21.0581C176.687 20.4137 176.414 19.9411 175.867 19.6403C175.321 19.3396 174.512 19.0926 173.44 18.8992L172.325 18.7059C171.232 18.5126 170.237 18.2333 169.341 17.8681C168.444 17.5029 167.734 16.9981 167.209 16.3537C166.684 15.7092 166.422 14.8822 166.422 13.8725C166.422 12.3688 166.99 11.2088 168.127 10.3925C169.264 9.55477 170.773 9.13588 172.653 9.13588C174.468 9.13588 175.955 9.54403 177.113 10.3603C178.294 11.1551 179.059 12.24 179.409 13.6148L176.261 14.4848C176.064 13.5181 175.649 12.8414 175.015 12.4548C174.38 12.0466 173.593 11.8425 172.653 11.8425C171.735 11.8425 171.013 12.0144 170.489 12.3581C169.964 12.6803 169.702 13.1422 169.702 13.7437C169.702 14.3881 169.953 14.8607 170.456 15.1614C170.981 15.4622 171.68 15.6877 172.555 15.8381L173.703 16.0314C174.861 16.2248 175.922 16.4933 176.884 16.837C177.846 17.1807 178.6 17.6748 179.147 18.3192C179.715 18.9637 180 19.8229 180 20.897C180 22.4866 179.398 23.7218 178.196 24.6025C176.993 25.4833 175.375 25.9237 173.342 25.9237Z"
              fill="white"
            />
            <defs>
              <clipPath id="clip0_341_656">
                <rect
                  width="29.5167"
                  height="29"
                  fill="white"
                  transform="translate(0 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>

        <div className="flex gap-10 font-p underline">
          <a href="">About us</a>
          <a href="">Services</a>
          <a href="">Use Cases</a>
          <a href="">Pricing</a>
          <a href="">Blog</a>
        </div>

        <div className="flex gap-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <circle cx="15" cy="15" r="15" fill="white" />
            <path
              d="M8.22178 22.0586H11.3059V12.0742H8.22178V22.0586Z"
              fill="#191A23"
            />
            <path
              d="M7.94141 8.88672C7.94141 9.87109 8.7358 10.668 9.76384 10.668C10.7451 10.668 11.5395 9.87109 11.5395 8.88672C11.5395 7.90234 10.7451 7.05859 9.76384 7.05859C8.7358 7.05859 7.94141 7.90234 7.94141 8.88672Z"
              fill="#191A23"
            />
            <path
              d="M19.8106 22.0586H22.9414V16.5742C22.9414 13.9023 22.3339 11.793 19.2031 11.793C17.7078 11.793 16.6797 12.6367 16.2592 13.4336H16.2124V12.0742H13.2685V22.0586H16.3526V17.1367C16.3526 15.8242 16.5863 14.5586 18.2218 14.5586C19.8106 14.5586 19.8106 16.0586 19.8106 17.1836V22.0586Z"
              fill="#191A23"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <path
              d="M30 15.0913C30 6.75456 23.2863 0 15 0C6.71371 0 0 6.75456 0 15.0913C0 22.6369 5.44355 28.9047 12.6411 30V19.4726H8.83064V15.0913H12.6411V11.8053C12.6411 8.03245 14.879 5.90264 18.2661 5.90264C19.9597 5.90264 21.6532 6.2069 21.6532 6.2069V9.91886H19.7782C17.9032 9.91886 17.2984 11.0751 17.2984 12.2921V15.0913H21.4718L20.8065 19.4726H17.2984V30C24.496 28.9047 30 22.6369 30 15.0913Z"
              fill="white"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <circle cx="15" cy="15" r="15" fill="white" />
            <path
              d="M21.9961 11.4915C22.6854 10.9745 23.3058 10.3541 23.7884 9.63028C23.168 9.90602 22.4442 10.1128 21.7204 10.1818C22.4786 9.73369 23.0301 9.04435 23.3058 8.18267C22.6165 8.59628 21.8238 8.90648 21.031 9.07881C20.3417 8.35501 19.4111 7.94141 18.3771 7.94141C16.378 7.94141 14.758 9.56135 14.758 11.5604C14.758 11.8362 14.7925 12.1119 14.8614 12.3876C11.8628 12.2153 9.1744 10.7677 7.38212 8.59628C7.07192 9.11328 6.89959 9.73369 6.89959 10.423C6.89959 11.6638 7.51999 12.7668 8.51953 13.4216C7.93359 13.3872 7.34766 13.2493 6.86512 12.9736V13.008C6.86512 14.7659 8.10593 16.2135 9.76034 16.5581C9.48461 16.6271 9.13994 16.696 8.82973 16.696C8.58847 16.696 8.38166 16.6615 8.1404 16.6271C8.58847 18.0747 9.93267 19.1087 11.5182 19.1432C10.2773 20.1082 8.72633 20.6942 7.03745 20.6942C6.72725 20.6942 6.45152 20.6597 6.17578 20.6252C7.76126 21.6592 9.65694 22.2452 11.725 22.2452C18.3771 22.2452 21.9961 16.7649 21.9961 11.974C21.9961 11.8017 21.9961 11.6638 21.9961 11.4915Z"
              fill="#191A23"
            />
          </svg>
        </div>
      </div>

      <div className="flex justify-between">
        <div>
          <a
            className="flex text-h4 items-start px-7 rounded-7 bg-lime text-black font-medium w-fit mb-[1.688rem]"
            href=""
          >
            Contact us:
          </a>
          <div className="text-p flex flex-col gap-5">
            <p>Email: info@positivus.com</p>
            <p>Phone: 555-567-8901</p>
            <p>
              Address: 1234 Main St <br /> Moonstone City, Stardust State 12345
            </p>
          </div>
        </div>
        <div className="bg-[#292A32] px-10 py-[3.625rem] rounded-14">
          <div className="flex gap-5 items-center justify-center">
            <input
              className="flex-1 py-22 px-35 rounded-14 border border-white text-white bg-dark"
              type="text"
              placeholder="Email"
            />
            <input
              className="flex-1 py-22 px-35 rounded-14 border border-transparent text-black bg-lime"
              type="submit"
              value={"Subscribe to news"}
            />
          </div>
        </div>
      </div>
      <hr className="my-50" />
      <div className="flex text-p gap-10">
        <p>© 2023 Positivus. All Rights Reserved.</p>
        <a className="underline" href="">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
}