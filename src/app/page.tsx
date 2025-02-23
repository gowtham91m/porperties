'use client';

import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="button-container">
      <Link href="/house-owners">
        <button>
          House Owners
        </button>
      </Link>
      <Link href="/tenants">
        <button>
          Tenants Looking for House
        </button>
      </Link>
    </div>
  );
}
