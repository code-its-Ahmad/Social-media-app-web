<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{

    public function index()
    {
        $users = User::select('id', 'name', 'email', 'confirmPassword', 'password')
            ->get();
        return response()->json(['success' => true, 'data' => $users], 200);
    }

    public function signup(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string',
            'email' => 'required|email|unique:users,email',
            'confirmPassword' => 'required',
            'password' => 'required|string|min:6',
        ]);
        if ($validated) {
            DB::table('users')->insert([
                'name' => $request->input('name'),
                'email' => $request->input('email'),
                'confirmPassword' => $request->input('confirmPassword'),
                'password' => $request->input('password')
            ]);
        }
    }

    public function login(Request $request)
    {

        $username = $request->input('name');
        $user = User::where('name', $username)->get();
        $password = $user->value('password');

        if (!$user)
            return response()->json(['success' => false, 'message' => 'Login Fail, no matches in our database']);

        if (Auth::check()) {
            $user = Auth::user();

            session(['id' => $user->id, 'name' => $user->name,  'email' => $user->email ,'confirmPassword' =>$user->confirmPassword , 'password' =>$user->password ]);
        } else {
            //return response()->json(['error' => 'Authentication failed'], 401);
        }

        return response()->json(['success' => true, 'message' => 'We\'ve found a match', 'data' => $user[0], 'pass' => $password], 200);
    }

    // public function logout()
    // {
    //     session()->flush();
    //     Auth::logout();
    //     return response()->json(['message' => 'Logout successful']);
    // }

    // public function updateProfile(Request $request, $user_id)
    // {
    //     $user = User::find($user_id);

    //     $validated = $request->validate([
    //         'firstname' => 'required|min:2|max:20',
    //         'lastname' => 'required|min:2|max:20',
    //         'telephone' => 'required|min:10|max:30',
    //     ]);
    //     DB::table('users')->where('id', $user_id)->update([
    //         'firstname' => $request->firstname,
    //         'lastname' => $request->lastname,
    //         'telephone' => $request->telephone,
    //     ]);
    //     $user = User::find($user_id);
    //     return response()->json(['success' => true, 'message' => 'Profile updated successfully', 'data' => $user]);

    // }

    // public function update(Request $request, $id)
    // {
    //     $user = User::findOrFail($id);

    //     $validatedData = $request->validate([
    //         'firstname' => 'required',
    //         'lastname' => 'required',
    //         'telephone' => 'required',
    //         'email' => 'required',
    //     ]);

    //     DB::table('users')->where('id', $id)->update([
    //         'firstname' => $request->firstname,
    //         'lastname' => $request->lastname,
    //         'telephone' => $request->telephone,
    //         'email' => $request->email,
    //     ]);

    //     return response()->json([
    //         'data' => $user,
    //         'message' => 'User updated successfully',
    //     ]);
    // }

    // public function destroy($id)
    // {
    //     $user = User::find($id);

    //     if (!$user) {
    //         return response()->json(['success' => false, 'message' => 'User not found'], 404);
    //     }

    //     $user->delete();

    //     return response()->json(['success' => true, 'message' => 'User deleted successfully']);
    // }

}
