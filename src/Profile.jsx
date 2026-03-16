import React from "react";

const Profile = () => {
  const developers = [
    {
      name: "Bilal",
      profession: "Frontend Developer",
      experience: "2 years",
      bio: "Passionate about building modern web interfaces.",
      image: "https://i.pravatar.cc/150?img=1",
      skills: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      name: "Ali",
      profession: "React Developer",
      experience: "3 years",
      bio: "Building scalable and fast web applications.",
      image: "https://i.pravatar.cc/150?img=2",
      skills: ["React", "Tailwind", "Node.js", "MongoDB"],
    },
    {
      name: "Faheem",
      profession: "UI Developer",
      experience: "1 years",
      bio: "Focused on modern UI and user experience.",
      image: "https://i.pravatar.cc/150?img=3",
      skills: ["HTML", "CSS", "Figma", "JavaScript"],
    },
  ];
  return (
    <div className="w-[100%] m-auto border rounded px-3 h-[100vh] py-5 flex gap-2 shadow-2xl">
      {developers.map((data, index) => {
        return (
          <div className="w-[25%] m-auto border rounded px-3 py-5 flex flex-col gap-2 shadow-2xl bg-amber-50 hover:cursor-pointer hover:shadow-blue-950">
            <img
              style={{
                height: "100%",
                borderRadius: "50%",
                width: "50%",
                margin: "auto",
              }}
              src={data.image}
              alt=""
            />
            <h1 className="font-bold text-2xl text-center">{data.name}</h1>
            <p>Profession: {data.profession}</p>
            <p>Experience: {data.experience}</p>
            <p>{data.bio}</p>
            <h1 className="font-bold text-2xl">SKILL:</h1>
            <ul className="list-disc list-inside">
              <li>{data.skills[0]}</li>
              <li>{data.skills[1]}</li>
              <li>{data.skills[2]}</li>
              <li>{data.skills[3]}</li>
            </ul>
            <button className="border py-2 bg-blue-800 text-white rounded">
              Contact
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Profile;
