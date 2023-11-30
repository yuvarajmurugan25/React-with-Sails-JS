import { forwardRef } from "react";

/**Default loading circle
 * @name Circle Loading
 * @returns {HTMLElement} 
 */
export default function Loading(){
    return (
    <div className="app app-load">
        <div className="spin"></div>
    </div>)
}