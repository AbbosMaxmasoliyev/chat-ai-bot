import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

interface SpeechRecognition extends EventTarget {
  start(): void;
  stop(): void;
  abort(): void;
  lang: string;
  interimResults: boolean;
  maxAlternatives: number;
  onaudioend: ((this: SpeechRecognition, ev: Event) => any) | null;
  onaudiostart: ((this: SpeechRecognition, ev: Event) => any) | null;
  onend: ((this: SpeechRecognition, ev: Event) => any) | null;
  onerror: ((this: SpeechRecognition, ev: Event) => any) | null;
  onnomatch: ((this: SpeechRecognition, ev: Event) => any) | null;
  onresult: ((this: SpeechRecognition, ev: any) => any) | null;
  onsoundend: ((this: SpeechRecognition, ev: Event) => any) | null;
  onsoundstart: ((this: SpeechRecognition, ev: Event) => any) | null;
  onspeechend: ((this: SpeechRecognition, ev: Event) => any) | null;
  onspeechstart: ((this: SpeechRecognition, ev: Event) => any) | null;
  onstart: ((this: SpeechRecognition, ev: Event) => any) | null;
}

@Component({
  selector: 'app-input-prompt',
  imports: [MatIconModule, ReactiveFormsModule],
  templateUrl: './input-prompt.component.html',
  styleUrl: './input-prompt.component.scss'
})
export class InputPromptComponent implements OnInit, OnDestroy {
  promptForm!: FormGroup;
  recognizing = false;
  recognition!: SpeechRecognition;
  @Output() promptSubmitted = new EventEmitter<string>(); // <-- YANGI QATOR

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.promptForm = this.fb.group({
      prompt: ['']
    });

    const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
    if (SpeechRecognition) {
      this.recognition = new SpeechRecognition();
      this.recognition.lang = 'uz-UZ';
      this.recognition.interimResults = false;
      this.recognition.maxAlternatives = 1;

      this.recognition.onresult = (event: any) => {
        const speechResult = event.results[0][0].transcript;
        this.promptForm.get('prompt')?.setValue(speechResult);
        console.log(speechResult);

      };

      this.recognition.onend = () => {
        this.recognizing = false;
      };
    }
  }

  startVoiceInput(): void {
    if (this.recognition && !this.recognizing) {
      this.recognizing = true;
      this.recognition.start();
    }
  }

  submitPrompt(): void {
    const promptText = this.promptForm.value.prompt;
    // console.log('Submitted prompt:', promptText);
    this.promptSubmitted.emit(promptText);
    this.promptForm.get('prompt')?.setValue("");

  }

  ngOnDestroy(): void {
    if (this.recognition) {
      this.recognition.abort();
    }
  }
}
