{
    // problem-6

    interface Profile {
        name: string;
        age: number;
        email: string;
    }

    type PartialProfile = Partial<Profile>

    function updateProfile(profile: Profile, updates: PartialProfile): Profile {
        return { ...profile, ...updates };
    }

















    // Sample Input :
    // const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
    // const updatedProfile = updateProfile(myProfile, { age: 26 });
    // console.log(updatedProfile);
}