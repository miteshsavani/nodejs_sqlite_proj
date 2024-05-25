UPDATE  Users
SET
    firstName = @firstName,
    lastName = @lastName,
    gender=@gender,
    mobileNumber=@mobileNumber
WHERE
    Id = @id