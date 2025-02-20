### Functions

<dl>
<dt><a href="#connectedCallback">connectedCallback()</a></dt>
<dd><p>setup our window mouse listeners, fire first render</p>
</dd>
<dt><a href="#disconnectedCallback">disconnectedCallback()</a></dt>
<dd><p>remove our window mouse listeners</p>
</dd>
<dt><a href="#_onResize">_onResize(evt, reMerge)</a></dt>
<dd><p>when the window resizes, re-render the histogram</p>
</dd>
<dt><a href="#_updateHistogram">_updateHistogram(reMerge)</a></dt>
<dd><p>render histogram bins based on the min and max values from data received,
 and the width of the rendered svg. smallest bin possible is 6px with 2px gaps,
 and a max of 50 bins is possible.
 otherwise data points will be merged to fit within the max bins.
 if less than 5 bins, histogram will be hidden.</p>
</dd>
<dt><a href="#_updateHistogramColors">_updateHistogramColors()</a></dt>
<dd><p>update light/medium/dark bin colors in histogram</p>
</dd>
<dt><a href="#_valueToPx">_valueToPx(value, isMin)</a> ⇒ <code>Number</code></dt>
<dd><p>given a number line value, return px location relative
to the widget</p>
</dd>
<dt><a href="#_pxToValue">_pxToValue(px)</a> ⇒ <code>Number</code></dt>
<dd><p>given a px location, return number line value</p>
</dd>
<dt><a href="#_renderAsync">_renderAsync()</a></dt>
<dd><p>debounce render calls</p>
</dd>
<dt><a href="#_render">_render()</a></dt>
<dd><p>set top/left px values for buttons/slider</p>
</dd>
<dt><a href="#_onRangeSliderChange">_onRangeSliderChange()</a></dt>
<dd><p>moving of range slider has stopped</p>
</dd>
<dt><a href="#_onRangeNullChange">_onRangeNullChange()</a></dt>
<dd><p>bound to input checkbox</p>
</dd>
<dt><a href="#_onInputChange">_onInputChange()</a></dt>
<dd><p>bound to min/max number inputs</p>
</dd>
<dt><a href="#_isFilterApplied">_isFilterApplied()</a> ⇒ <code>Boolean</code></dt>
<dd><p>is there currenlty a filter set</p>
</dd>
<dt><a href="#_notifySelected">_notifySelected()</a></dt>
<dd><p>notify parent of selection change</p>
</dd>
<dt><a href="#reset">reset()</a></dt>
<dd><p>reset range filter</p>
</dd>
<dt><a href="#_onMoveStart">_onMoveStart(e)</a></dt>
<dd><p>bound to btns and center line.  Fired when the user mouses
down on element indicating a move is starting</p>
</dd>
<dt><a href="#_onMove">_onMove(e)</a></dt>
<dd><p>bound to mousemove event on this element.  Update min/max
values based on type of move that is happening ie min, max or range.  Does
nothing if we are not moving.</p>
</dd>
<dt><a href="#_onMoveMiddle">_onMoveMiddle(e)</a></dt>
<dd><p>bound to mousemove event on this element.  Update min/max
values based closest min/max button (adjust selection that is closest to mouse position)</p>
</dd>
<dt><a href="#_onMoveOutsideRange">_onMoveOutsideRange(e)</a></dt>
<dd><p>bound to mousemove event on this element.  Update min/max
values based on mouse position, but only if the mouse is outside the current
min/max range</p>
</dd>
<dt><a href="#_onMoveStop">_onMoveStop()</a></dt>
<dd><p>bound to mouseup/mouseout event on window.  It&#39;s always best to bind
this to the window as a catch all.  Resets all moving flags</p>
</dd>
</dl>

<a name="connectedCallback"></a>

### connectedCallback()
setup our window mouse listeners, fire first render

**Kind**: global function  
<a name="disconnectedCallback"></a>

### disconnectedCallback()
remove our window mouse listeners

**Kind**: global function  
<a name="_onResize"></a>

### \_onResize(evt, reMerge)
when the window resizes, re-render the histogram

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| evt | <code>Event</code> |  |
| reMerge | <code>Boolean</code> | should we re-merge the data, typically when resizing window could cause difference |

<a name="_updateHistogram"></a>

### \_updateHistogram(reMerge)
render histogram bins based on the min and max values from data received,
 and the width of the rendered svg. smallest bin possible is 6px with 2px gaps,
 and a max of 50 bins is possible.
 otherwise data points will be merged to fit within the max bins.
 if less than 5 bins, histogram will be hidden.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| reMerge | <code>Boolean</code> | should we re-merge the data, typically when resizing window could cause difference |

<a name="_updateHistogramColors"></a>

### \_updateHistogramColors()
update light/medium/dark bin colors in histogram

**Kind**: global function  
<a name="_valueToPx"></a>

### \_valueToPx(value, isMin) ⇒ <code>Number</code>
given a number line value, return px location relative
to the widget

**Kind**: global function  
**Returns**: <code>Number</code> - px location  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Number</code> | number line value |
| isMin | <code>Boolean</code> | is this the min value |

<a name="_pxToValue"></a>

### \_pxToValue(px) ⇒ <code>Number</code>
given a px location, return number line value

**Kind**: global function  
**Returns**: <code>Number</code> - value  

| Param | Type | Description |
| --- | --- | --- |
| px | <code>Number</code> | location |

<a name="_renderAsync"></a>

### \_renderAsync()
debounce render calls

**Kind**: global function  
<a name="_render"></a>

### \_render()
set top/left px values for buttons/slider

**Kind**: global function  
<a name="_onRangeSliderChange"></a>

### \_onRangeSliderChange()
moving of range slider has stopped

**Kind**: global function  
<a name="_onRangeNullChange"></a>

### \_onRangeNullChange()
bound to input checkbox

**Kind**: global function  
<a name="_onInputChange"></a>

### \_onInputChange()
bound to min/max number inputs

**Kind**: global function  
<a name="_isFilterApplied"></a>

### \_isFilterApplied() ⇒ <code>Boolean</code>
is there currenlty a filter set

**Kind**: global function  
<a name="_notifySelected"></a>

### \_notifySelected()
notify parent of selection change

**Kind**: global function  
<a name="reset"></a>

### reset()
reset range filter

**Kind**: global function  
<a name="_onMoveStart"></a>

### \_onMoveStart(e)
bound to btns and center line.  Fired when the user mouses
down on element indicating a move is starting

**Kind**: global function  

| Param | Type |
| --- | --- |
| e | <code>MouseEvent</code> | 

<a name="_onMove"></a>

### \_onMove(e)
bound to mousemove event on this element.  Update min/max
values based on type of move that is happening ie min, max or range.  Does
nothing if we are not moving.

**Kind**: global function  

| Param | Type |
| --- | --- |
| e | <code>MouseEvent</code> | 

<a name="_onMoveMiddle"></a>

### \_onMoveMiddle(e)
bound to mousemove event on this element.  Update min/max
values based closest min/max button (adjust selection that is closest to mouse position)

**Kind**: global function  

| Param | Type |
| --- | --- |
| e | <code>MouseEvent</code> | 

<a name="_onMoveOutsideRange"></a>

### \_onMoveOutsideRange(e)
bound to mousemove event on this element.  Update min/max
values based on mouse position, but only if the mouse is outside the current
min/max range

**Kind**: global function  

| Param | Type |
| --- | --- |
| e | <code>MouseEvent</code> | 

<a name="_onMoveStop"></a>

### \_onMoveStop()
bound to mouseup/mouseout event on window.  It's always best to bind
this to the window as a catch all.  Resets all moving flags

**Kind**: global function  
