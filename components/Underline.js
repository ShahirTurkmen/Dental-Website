'use client'
import React from "react";
/**
 * @param {{
 * className:string,
 * width:string
 * height:string
 * borderColor:string
 * borderSize:string
 * borderTheme:'solid'|"dashed"|"dotted"|"double" | "hidden" |"none" | "inherit",
 * borderShape:'borderTop'|'borderBottom'|'borderLeft'|'borderRight' | 'border',
 * borderColor:string,
 * marginTop:string
 * }}
 */
function Underline({
  className,
  width,
  height,
  borderColor,
  borderSize,
  borderTheme,
  borderShape,
  marginTop,
}) {
  const style = JSON.parse(`{
    "marginTop":"${marginTop}",
    "width":"${width}",
    "height":"${height}",
    "${borderShape}":"${borderSize} ${borderTheme} ${borderColor}"
}`);
    console.log(style)
  return (
    <div
          style={style}
          className={`${className}`}
    />
  );
}

export default Underline;
