import React from "react";

interface LogoProps {
    width: number,
    height: number
}

export const LogoComponent: React.FC<LogoProps> = ({ width = 300, height = 300 }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M277.492 52.4925L250 25L222.507 52.4925L25 250L222.507 447.508L250 475L277.492 447.508L475 250L277.492 52.4925ZM273.115 56.8693L466.246 250L273.115 443.131L251.231 421.246L263.609 408.868L275.851 421.109L448.328 248.632L275.851 76.155L262.242 89.7643L251.231 78.7537L273.115 56.8693ZM268.738 52.4925L250 33.7538L231.261 52.4925L250 71.231L268.738 52.4925ZM226.884 56.8694L33.7538 250L226.884 443.131L248.769 421.246L237.758 410.235L224.149 423.845L51.6714 251.368L224.149 78.8905L236.39 91.1323L248.769 78.7538L226.884 56.8694ZM250 466.246L231.261 447.508L250 428.769L268.738 447.508L250 466.246ZM60.4253 251.368L224.149 415.091L233.385 405.862L77.5228 250L232.017 95.5059L224.149 87.6443L60.4253 251.368ZM236.395 99.881L86.2767 250L237.764 401.487L247 392.259L103.374 248.632L244.263 107.742L236.395 99.881ZM248.632 103.374L240.767 95.5092L250 86.2765L257.865 94.1411L248.632 103.374ZM252.999 107.741L262.236 98.5124L413.723 250L263.604 400.119L255.736 392.258L396.626 251.368L252.999 107.741ZM248.631 112.106L388.009 251.368L251.369 387.894L111.991 248.632L248.631 112.106ZM251.367 396.626L242.135 405.858L250 413.723L259.232 404.491L251.367 396.626ZM275.851 84.9088L266.615 94.1373L422.477 250L267.983 404.494L275.851 412.356L439.574 248.632L275.851 84.9088ZM250 348.891L242.807 341.698L248.957 335.537L256.155 342.736L250 348.891ZM250 357.644L238.434 346.078L229.483 355.046L153.298 278.86L162.257 269.901L142.356 250L162.873 229.483L153.298 219.909L229.483 143.86L238.99 153.366L250 142.356L262.584 154.939L271.064 146.459L347.112 222.644L338.701 231.056L357.645 250L336.649 270.996L347.112 281.459L271.064 357.644L260.532 347.113L250 357.644ZM151.11 250L167.249 233.86L182.774 249.384L166.634 265.524L151.11 250ZM171.626 229.483L187.151 245.008L202.203 229.956L194.878 222.644L247.214 170.309L238.999 162.11L171.626 229.483ZM171.011 269.901L187.151 253.761L204.872 271.483L194.878 281.459L244.597 331.178L238.442 337.333L171.011 269.901ZM191.527 249.384L209.253 267.11L224.339 252.052L206.583 234.328L191.527 249.384ZM229.483 296.094L209.24 275.851L203.632 281.459L248.974 326.801L296.915 278.86L293.906 275.851L271.064 298.693L248.937 276.606L229.483 296.094ZM271.064 290.076L253.261 272.274L271.778 253.723L289.579 271.524L271.064 290.076ZM251.573 233.518L267.439 249.384L248.906 267.918L233.039 252.052L251.573 233.518ZM293.893 267.2L276.109 249.384L291.231 234.236L309.011 252.052L293.893 267.2ZM271.778 245.046L286.914 229.91L271.064 214.027L255.926 229.165L271.778 245.046ZM271.064 205.41L291.239 225.585L296.915 219.909L251.595 174.681L203.632 222.644L206.573 225.585L229.483 202.675L251.604 224.835L271.064 205.41ZM313.354 247.7L295.556 229.903L305.532 219.909L255.95 170.327L262.584 163.693L329.955 231.065L313.354 247.7ZM258.207 159.316L251.573 165.95L243.366 157.743L250 151.109L258.207 159.316ZM228.693 256.398L213.617 271.474L229.483 287.34L244.574 272.25L228.693 256.398ZM167.249 225.106L234.618 157.738L229.483 152.614L162.052 219.909L167.249 225.106ZM334.328 226.683L338.359 222.644L271.064 155.213L266.961 159.316L334.328 226.683ZM210.95 229.962L229.483 211.428L247.243 229.188L228.693 247.705L210.95 229.962ZM298.221 271.536L305.532 278.86L253.33 331.156L260.532 338.359L327.906 270.985L313.354 256.403L298.221 271.536ZM317.705 252.052L332.272 266.619L348.891 250L334.324 235.433L317.705 252.052ZM229.483 346.292L234.066 341.71L166.634 274.278L162.052 278.86L229.483 346.292ZM264.909 342.736L332.278 275.366L338.359 281.459L271.064 348.891L264.909 342.736Z"
                  fill="url(#paint0_linear_251_164)"/>
            <defs>
                <linearGradient id="paint0_linear_251_164" x1="471.238" y1="273.758" x2="213.931" y2="16.4518"
                                gradientUnits="userSpaceOnUse">
                    <stop stop-color="#CA9328"/>
                    <stop offset="0.51" stop-color="#FFE169"/>
                    <stop offset="1" stop-color="#CA9328"/>
                </linearGradient>
            </defs>
        </svg>

    )
}