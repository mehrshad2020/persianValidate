# نحوه نصب 
نحوه نصب با npm

```bash
npm i persian-validate
```
نحوه نصب با cdn
```html
 <script src="https://cdn.jsdelivr.net/gh/mehrshad2020/persianValidate/persianValidate.js"></script>
```
نحوه نصب به صورت دانلودی:کافیه فایل persianValidate.js از مخزن دانلود کنید و به فایل html مورد نظر لینک کنید به صورت زیر:
```html
<script src="persianValidate.js"></script>
```
# نحوه استفاده
طریقه وارد کردن ماژول ها از طریق import :
```javascript
 import { module_name } from "persian-validate"
```
مثال: وارد کردن تابع validateImageExtension که وظیفه برسی کردن فرمت فایل عکسی رو داره اگر فرمت فایل ["png","jpg"] به ما true  میده در غیر این صورت false:
```javascript
 import { validateImageExtension } from "persian-validate"
 validateImageExtension("mehrshad.png") //true
 validateImageExtension("mehrshad.svg") //false
```
اگر به صورت لینک شده از کتابخانه استفاده شده در html باز هم به توابع دسترسی دارید:
```html
 <script src="https://cdn.jsdelivr.net/gh/mehrshad2020/persianValidate/persianValidate.js"></script>
or
<script src="persianValidate.js"></script>
```
```javascript
 validateImageExtension("mehrshad.png") //true
 validateImageExtension("mehrshad.svg") //false
```
| عنوان ستون 1 | عنوان ستون 2 | عنوان ستون 3 |
|--------------|---------------|---------------|
| محتوای 1     | محتوای 2      | محتوای 3      |
| محتوای 4     | محتوای 5      | محتوای 6      |
| محتوای 7     | محتوای 8      | محتوای 9      |

