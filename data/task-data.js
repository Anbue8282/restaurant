const tasks = [
    {
      id: 1,
      createdBy: 1, // johnDoe's user ID
      title: "Buy groceries",
      description: "Buy milk, bread, and eggs.",
      status: "done", // Random status
      createdAt: "2023-09-02", // Random date in September
    },
    {
      id: 2,
      createdBy: 1,
      title: "Workout",
      description: "Complete a 30-minute run.",
      status: "due",
      createdAt: "2023-09-10",
    },
    {
      id: 3,
      createdBy: 1,
      title: "Read a book",
      description: "Finish reading 'Atomic Habits'.",
      status: "cancel",
      createdAt: "2023-09-15",
    },
  
    {
      id: 4,
      createdBy: 2, // janeSmith's user ID
      title: "Project meeting",
      description: "Attend the team meeting at 10 AM.",
      status: "done",
      createdAt: "2023-09-03",
    },
    {
      id: 5,
      createdBy: 2,
      title: "Submit report",
      description: "Send the quarterly report by email.",
      status: "due",
      createdAt: "2023-09-12",
    },
  
    {
      id: 6,
      createdBy: 3, // samBrown's user ID
      title: "Plan weekend trip",
      description: "Book hotel and transport for the weekend trip.",
      status: "done",
      createdAt: "2023-09-08",
    },
    {
      id: 7,
      createdBy: 3,
      title: "Finish course",
      description: "Complete the JavaScript course on Udemy.",
      status: "cancel",
      createdAt: "2023-09-19",
    },
    {
      id: 8,
      createdBy: 3,
      title: "Grocery shopping",
      description: "Buy fruits and vegetables for the week.",
      status: "due",
      createdAt: "2023-09-22",
    },
  
    {
      id: 9,
      createdBy: 4, // emilyDavis's user ID
      title: "Doctor appointment",
      description: "Visit the doctor for a regular check-up.",
      status: "done",
      createdAt: "2023-09-11",
    },
    {
      id: 10,
      createdBy: 4,
      title: "Buy birthday gift",
      description: "Get a birthday gift for Jane.",
      status: "due",
      createdAt: "2023-09-14",
    },
  
    {
      id: 11,
      createdBy: 5, // michaelJohnson's user ID
      title: "Pay bills",
      description: "Pay the electricity and internet bills.",
      status: "cancel",
      createdAt: "2023-09-05",
    },
    {
      id: 12,
      createdBy: 5,
      title: "Clean the house",
      description: "Do a deep clean of the entire house.",
      status: "due",
      createdAt: "2023-09-21",
    },
    {
      id: 13,
      createdBy: 5,
      title: "Prepare presentation",
      description: "Create slides for the client meeting.",
      status: "done",
      createdAt: "2023-09-28",
    },
  ];
  
  export default tasks;