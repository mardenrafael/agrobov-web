import * as React from "react";
import { SVGProps } from "react";

const Brinco = (props: SVGProps<SVGSVGElement>) => (
  <div className="relative " style={{ width: 292 }}>
    <svg
      width={292}
      height={282}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M106.174 36.745c.16-1.722.43-3.412.801-5.063C111.074 13.662 127.506.5 146 .5c18.948 0 34.819 13.175 38.952 30.864.021.09.044.18.064.271l.009.047c.371 1.651.641 3.341.801 5.063 6.904 38.304 31.49 63.937 95.213 83.548 6.438 1.981 10.961 7.867 10.961 14.602V266.5c0 8.284-6.716 15-15 15H15c-8.284 0-15-6.716-15-15V134.895c0-6.735 4.523-12.621 10.96-14.602 63.724-19.611 88.31-45.244 95.214-83.548Z"
        fill="#EBDF0F"
      />
      <circle cx={146} cy={40} r={23} fill="#4F4F4F" />
      <circle cx={146} cy={40} r={20} fill="#333" />
      {/* <path
        d="M87.284 224.342c-5.13-.02-9.546-1.282-13.244-3.788-3.68-2.506-6.513-6.135-8.502-10.888-1.968-4.753-2.943-10.47-2.923-17.152 0-6.662.984-12.339 2.953-17.032 1.989-4.694 4.823-8.263 8.502-10.709 3.698-2.466 8.103-3.699 13.214-3.699 5.11 0 9.506 1.233 13.185 3.699 3.698 2.466 6.542 6.045 8.531 10.738 1.989 4.674 2.973 10.341 2.953 17.003 0 6.702-.994 12.429-2.983 17.182-1.969 4.753-4.793 8.382-8.472 10.888-3.678 2.505-8.083 3.758-13.214 3.758Zm0-10.708c3.5 0 6.294-1.76 8.382-5.28 2.088-3.52 3.122-8.8 3.102-15.84 0-4.633-.477-8.491-1.431-11.574-.935-3.082-2.267-5.399-3.998-6.95-1.71-1.551-3.728-2.327-6.055-2.327-3.48 0-6.264 1.74-8.352 5.221-2.088 3.48-3.142 8.69-3.162 15.63 0 4.693.467 8.611 1.402 11.753.954 3.122 2.297 5.469 4.027 7.04 1.73 1.551 3.758 2.327 6.085 2.327Zm67.072 10.708c-5.131-.02-9.545-1.282-13.244-3.788-3.679-2.506-6.513-6.135-8.502-10.888-1.968-4.753-2.943-10.47-2.923-17.152 0-6.662.984-12.339 2.953-17.032 1.989-4.694 4.823-8.263 8.502-10.709 3.698-2.466 8.103-3.699 13.214-3.699 5.111 0 9.506 1.233 13.185 3.699 3.699 2.466 6.542 6.045 8.531 10.738 1.989 4.674 2.973 10.341 2.953 17.003 0 6.702-.994 12.429-2.983 17.182-1.969 4.753-4.793 8.382-8.472 10.888-3.678 2.505-8.083 3.758-13.214 3.758Zm0-10.708c3.5 0 6.294-1.76 8.382-5.28 2.088-3.52 3.122-8.8 3.102-15.84 0-4.633-.477-8.491-1.431-11.574-.935-3.082-2.267-5.399-3.998-6.95-1.71-1.551-3.728-2.327-6.055-2.327-3.48 0-6.264 1.74-8.352 5.221-2.088 3.48-3.142 8.69-3.162 15.63 0 4.693.467 8.611 1.402 11.753.954 3.122 2.297 5.469 4.027 7.04 1.73 1.551 3.758 2.327 6.085 2.327Zm69.697-51.725V223h-12.916v-48.831h-.358l-13.99 8.77v-11.455l15.123-9.575h12.141Z"
        fill="#000"
        values="002"
      /> */}
    </svg>
    <input
      maxLength={4}
      className="absolute uppercase text-stone-900 focus:outline-none bottom-10 left-0 right-0 bg-transparent font-bold text-7xl tracking-wider text-center"
    />
  </div>
);

export default Brinco;