# Angular Custom Pipe Exercise: Text Truncation

A hands-on Angular exercise focused on transforming template data using a custom data-transformation **Pipe** (`textTruncate`) paired alongside Angular's built-in **AsyncPipe** and modern control flow syntax.

## 🚀 Concept Overview

Pipes in Angular are simple functions designed to accept an input value, process it, and return a transformed value directly inside the HTML template. 

In this exercise, data streams reactively via an asynchronous observable stream, unboxes seamlessly via the `async` pipe, and has its text output visually modified by our custom pipe.

---

## 🛠️ Code Implementation

### 1. The Custom Pipe (`text-truncate.pipe.ts`)

This custom pipe implements the `PipeTransform` interface. It safely reads any string input and truncates it down to its first 4 characters, appending an ellipsis (`...`) to gracefully indicate hidden text.

```typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textTruncate',
})
export class TextTruncatePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';

    return value.slice(0, 4) + '...';
  }
}