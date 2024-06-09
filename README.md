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
این تابع validateUsernameRe یک نام کاربری را به عنوان ورودی می‌گیرد تابع سپس با استفاده از regex.test(username) اعتبارسنجی نام کاربری را انجام می‌دهد و مقدار بولی (true یا false) را برمی‌گرداند.
```javascript
console.log(validateUsernameRe("user_123")); // true
console.log(validateUsernameRe("user"));     // false (بدون عدد)
console.log(validateUsernameRe("user123"));  // false (بدون کاراکتر _)
console.log(validateUsernameRe("user@123")); // false (کاراکتر غیر مجاز)
```
# ویژگی ها
این کتابخانه این توابع رو داره:
|<table>
    <caption>
        <p>Table 1</p>
    </caption>
    <thead>
        <tr>
            <th>توضیحات</th>
            <th>تابع</th>
        </tr>
        <tr>
            <td>
                <table>
                    <tbody>
                        <tr dir="rtl">
                            <td>وظیفه برسی کردن فرمت فایل عکسی رو داره اگر فرمت فایل ["png","jpg"] به ما true میده در غیر این صورت false:</td>
                        </tr>
                    </tbody>
                </table><br>
            </td>
            <td>validateImageExtension</td>
        </tr>
    </thead>
    <tbody></tbody>
</table>

