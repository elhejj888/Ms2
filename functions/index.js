const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.updateEmployeePassword = functions.https.onCall(async (data, context) => {
  // 1. Authentication/Authorization:  Check if the user calling the function is an admin.
  if (!context.auth) {
    throw new functions.https.HttpsError('unauthenticated', 'The function must be called while authenticated.');
  }

  const uid = context.auth.uid; // The UID of the user making the request

  try {
    const userRecord = await admin.auth().getUser(uid);

    if (!userRecord.customClaims || !userRecord.customClaims.admin) {
      throw new functions.https.HttpsError(
        'permission-denied',
        'Only admins can update employee passwords.'
      );
    }
  } catch (error) {
    throw new functions.https.HttpsError('internal', 'Error checking admin status: ' + error.message);
  }


  // 2. Get the data passed from the client.
  const employeeUid = data.employeeUid;
  const newPassword = data.newPassword;

  // 3. Validate the data.
  if (!employeeUid || typeof employeeUid !== 'string' || employeeUid.trim() === '') {
    throw new functions.https.HttpsError('invalid-argument', 'The employeeUid must be a non-empty string.');
  }

  if (!newPassword || typeof newPassword !== 'string' || newPassword.length < 6) {
    throw new functions.https.HttpsError('invalid-argument', 'The newPassword must be a string with at least 6 characters.');
  }

  // 4. Update the user's password using the Admin SDK.
  try {
    await admin.auth().updateUser(employeeUid, {
      password: newPassword,
    });

    console.log(`Successfully updated password for user: ${employeeUid}`);
    return { success: true, message: 'Password updated successfully.' };

  } catch (error) {
    console.error('Error updating user password:', error);
    throw new functions.https.HttpsError('internal', 'Error updating password: ' + error.message);
  }
});
