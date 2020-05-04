import React, { FC, CSSProperties } from 'react'
import { ThemeProps } from '../Icon/icon'

export interface ProgressProps {
  /**设置比列 */
  percent: number
  /**自定义高度 */
  strokeHeight?: number
  /**是否显示文字 */
  showText?: boolean
  /**自定义样式 */
  styles?: CSSProperties
  /**主题样式 */
  theme?: ThemeProps
}

export const Progress: FC<ProgressProps> = (props) => {
  const {
    percent,
    strokeHeight,
    showText,
    styles,
    theme
  } = props
  return (
    <div className="beautg-progress-bar" style={styles}>
      <div className="beautg-progress-bar-outer" style={{height: `${strokeHeight}px`}}>
        <div
          className={`beautg-progress-bar-inner color-${theme}`}
          style={{width: `${percent}%`}}
        >
          {showText && <span className="inner-text">{`${percent}%`}</span>}
        </div>
      </div>
    </div>
  )
}

Progress.defaultProps = {
  strokeHeight: 15,
  showText: true,
  theme: 'primary'
}

export default Progress
