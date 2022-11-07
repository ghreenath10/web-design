<!doctype html>
<html> 
<head>
    <title>My Form</title> 
</head>
<body>
   <form onsubmit="return valid( )">
    <table cellpadding="10px" cellspacing="5px" border="0" align="center">
        <tr> 
            <td>Enter Name</td> 
            <td><input type="text" id="user" required /></td>
        </tr> 
        <tr> 
            <td>Enter ID</td> 
            <td><input type="text" id="UserName" required /></td>
        </tr> 
        <tr> 
            <td>Enter Password</td> 
            <td><input type="password" id="pass" required /></td>
        </tr>
        <tr> 
            <td>Enter Email</td> 
            <td><input type="email" id="email" required /></td>
        </tr> 
        <tr> 
            <td>Select Gender</td> 
            <td><label><input type="radio" name="gender"
            value="Male" />Male</label> <label><input type="radio"
            name="gender" value="Female" />Female</label></td>
        </tr> 
        <tr> 
            <td colspan="2" align="center"><input type="submit"
            value="Submit"> <input type="Reset" value="Reset">
            </td> 
        </tr> 
    </table> 
   </form>
</body> 
</html>