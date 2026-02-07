// Mock data for the E-Land Registry System
// This will be replaced with real database data when backend is connected

export interface DeedRecord {
  id: string;
  landTitleNumber: string;
  deedNumber: string;
  ownerName: string;
  ownerNIC: string;
  landLocation: string;
  district: string;
  province: string;
  landArea: string;
  surveyRef: string;
  registrationDate: string;
  lastVerified: string;
  blockchainHash: string;
  transactionId: string;
  status: 'valid' | 'invalid' | 'pending';
}

export interface AuditLogEntry {
  id: string;
  transactionId: string;
  deedNumber: string;
  action: 'register' | 'transfer' | 'update' | 'verify';
  performedBy: string;
  timestamp: string;
  details?: string;
}

export interface DashboardStats {
  totalDeeds: number;
  pendingTransfers: number;
  todayVerifications: number;
  activeUsers: number;
}

// Mock deed records
export const mockDeeds: DeedRecord[] = [
  {
    id: '1',
    landTitleNumber: 'LT/WP/COL/2024/00001',
    deedNumber: 'LR/2024/COL/00001',
    ownerName: 'Amal Perera',
    ownerNIC: '********123V',
    landLocation: 'No. 45, Temple Road, Colombo 07',
    district: 'Colombo',
    province: 'Western',
    landArea: '15.5 Perches',
    surveyRef: 'SV/2024/COL/0456',
    registrationDate: '2024-01-15',
    lastVerified: '2024-12-10T14:30:00Z',
    blockchainHash: '0x7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069',
    transactionId: 'TX-2024-00001',
    status: 'valid',
  },
  {
    id: '2',
    landTitleNumber: 'LT/CP/KAN/2024/00042',
    deedNumber: 'LR/2024/KAN/00042',
    ownerName: 'Nimal Fernando',
    ownerNIC: '********456V',
    landLocation: '23/A, Dalada Veediya, Kandy',
    district: 'Kandy',
    province: 'Central',
    landArea: '22.0 Perches',
    surveyRef: 'SV/2024/KAN/0123',
    registrationDate: '2024-02-20',
    lastVerified: '2024-12-08T09:15:00Z',
    blockchainHash: '0x3e23e8160039594a33894f6564e1b1348bbd7a0088d42c4acb73eeaed59c009d',
    transactionId: 'TX-2024-00042',
    status: 'valid',
  },
  {
    id: '3',
    landTitleNumber: 'LT/SP/GAL/2024/00015',
    deedNumber: 'LR/2024/GAL/00015',
    ownerName: 'Kumari Silva',
    ownerNIC: '********789V',
    landLocation: '78, Beach Road, Galle Fort',
    district: 'Galle',
    province: 'Southern',
    landArea: '10.25 Perches',
    surveyRef: 'SV/2024/GAL/0089',
    registrationDate: '2024-03-05',
    lastVerified: '2024-12-09T16:45:00Z',
    blockchainHash: '0x2c624232cdd221771294dfbb310aca000a0df6ac8b66b696d90ef06fdefb64a3',
    transactionId: 'TX-2024-00015',
    status: 'valid',
  },
  {
    id: '4',
    landTitleNumber: 'LT/NP/JAF/2023/00089',
    deedNumber: 'LR/2023/JAF/00089',
    ownerName: 'Krishnan Rajaratnam',
    ownerNIC: '********012V',
    landLocation: '12, Stanley Road, Jaffna',
    district: 'Jaffna',
    province: 'Northern',
    landArea: '30.0 Perches',
    surveyRef: 'SV/2023/JAF/0234',
    registrationDate: '2023-11-12',
    lastVerified: '2024-12-07T11:20:00Z',
    blockchainHash: '0x4e07408562bedb8b60ce05c1decfe3ad16b72230967de01f640b7e4729b49fce',
    transactionId: 'TX-2023-00089',
    status: 'valid',
  },
  {
    id: '5',
    landTitleNumber: 'LT/WP/COL/2024/00078',
    deedNumber: 'LR/2024/COL/00078',
    ownerName: 'Saman Wickramasinghe',
    ownerNIC: '********345V',
    landLocation: '156, Galle Road, Mount Lavinia',
    district: 'Colombo',
    province: 'Western',
    landArea: '18.75 Perches',
    surveyRef: 'SV/2024/COL/0567',
    registrationDate: '2024-04-22',
    lastVerified: '2024-12-10T08:00:00Z',
    blockchainHash: '0x6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b',
    transactionId: 'TX-2024-00078',
    status: 'pending',
  },
];

// Mock audit logs
export const mockAuditLogs: AuditLogEntry[] = [
  {
    id: '1',
    transactionId: 'TX-2024-00001',
    deedNumber: 'LR/2024/COL/00001',
    action: 'register',
    performedBy: 'Admin_Colombo_01',
    timestamp: '2024-01-15T10:30:00Z',
    details: 'Initial deed registration',
  },
  {
    id: '2',
    transactionId: 'TX-2024-00042',
    deedNumber: 'LR/2024/KAN/00042',
    action: 'register',
    performedBy: 'Admin_Kandy_02',
    timestamp: '2024-02-20T14:15:00Z',
    details: 'Initial deed registration',
  },
  {
    id: '3',
    transactionId: 'TX-2024-V-00156',
    deedNumber: 'LR/2024/COL/00001',
    action: 'verify',
    performedBy: 'Public',
    timestamp: '2024-12-10T14:30:00Z',
  },
  {
    id: '4',
    transactionId: 'TX-2024-00015',
    deedNumber: 'LR/2024/GAL/00015',
    action: 'register',
    performedBy: 'Admin_Galle_01',
    timestamp: '2024-03-05T09:00:00Z',
    details: 'Initial deed registration',
  },
  {
    id: '5',
    transactionId: 'TX-2024-T-00089',
    deedNumber: 'LR/2023/JAF/00089',
    action: 'transfer',
    performedBy: 'Admin_Jaffna_01',
    timestamp: '2024-06-15T11:45:00Z',
    details: 'Ownership transferred from previous owner',
  },
  {
    id: '6',
    transactionId: 'TX-2024-U-00042',
    deedNumber: 'LR/2024/KAN/00042',
    action: 'update',
    performedBy: 'Admin_Kandy_02',
    timestamp: '2024-08-20T16:30:00Z',
    details: 'Land area corrected after survey',
  },
  {
    id: '7',
    transactionId: 'TX-2024-V-00234',
    deedNumber: 'LR/2024/KAN/00042',
    action: 'verify',
    performedBy: 'Public',
    timestamp: '2024-12-08T09:15:00Z',
  },
  {
    id: '8',
    transactionId: 'TX-2024-00078',
    deedNumber: 'LR/2024/COL/00078',
    action: 'register',
    performedBy: 'Admin_Colombo_01',
    timestamp: '2024-04-22T13:00:00Z',
    details: 'Initial deed registration - pending system confirmation',
  },
];

// Mock dashboard stats
export const mockDashboardStats: DashboardStats = {
  totalDeeds: 1247,
  pendingTransfers: 23,
  todayVerifications: 156,
  activeUsers: 12,
};

// Function to search deed by land title number or deed number
export const findDeedByNumber = (searchNumber: string): DeedRecord | undefined => {
  const searchLower = searchNumber.toLowerCase();
  return mockDeeds.find(
    (deed) => deed.landTitleNumber.toLowerCase() === searchLower ||
      deed.deedNumber.toLowerCase() === searchLower
  );
};

// Function to get recent activity
export const getRecentActivity = (limit: number = 5): AuditLogEntry[] => {
  return [...mockAuditLogs]
    .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
    .slice(0, limit);
};

// Mock admin credentials (for frontend-only demo)
export const mockAdminCredentials = {
  username: 'admin',
  password: 'admin123',
};

// Simulated hash generation
export const generateMockHash = (data: string): string => {
  // Simple mock hash - in real implementation this would be cryptographic
  let hash = 0;
  for (let i = 0; i < data.length; i++) {
    const char = data.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return '0x' + Math.abs(hash).toString(16).padStart(64, '0');
};
