import { users, type User, type InsertUser } from "@shared/schema";
import { contactSubmissions, testimonials, type ContactSubmission, type Testimonial, type InsertContactSubmission } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  getTestimonials(): Promise<Testimonial[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contacts: Map<number, ContactSubmission>;
  private testimonialsList: Testimonial[];
  currentId: number;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.testimonialsList = [
      {
        id: 1,
        name: "John D.",
        location: "Mountain Pine, AR",
        rating: "5",
        content: "Excellent service! They responded quickly to my emergency call and fixed the issue professionally."
      },
      {
        id: 2,
        name: "Sarah M.",
        location: "Hot Springs, AR",
        rating: "5",
        content: "Very professional team. They upgraded our entire home's electrical system efficiently and safely."
      },
      {
        id: 3,
        name: "Robert K.",
        location: "Mountain Pine, AR",
        rating: "5",
        content: "Great experience with their residential electrical services. Fair pricing and quality work."
      }
    ];
    this.currentId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    const id = this.currentId++;
    const contactSubmission: ContactSubmission = { 
      ...submission, 
      id,
      submitted_at: new Date().toISOString()
    };
    this.contacts.set(id, contactSubmission);
    return contactSubmission;
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return this.testimonialsList;
  }
}

export const storage = new MemStorage();