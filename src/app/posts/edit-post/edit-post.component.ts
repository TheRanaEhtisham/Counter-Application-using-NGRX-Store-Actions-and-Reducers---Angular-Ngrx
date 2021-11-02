import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/model/posts.model';
import { AppState } from 'src/app/store/app.state';
import { getPostById } from '../state/posts.selector';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css'],
})
export class EditPostComponent implements OnInit, OnDestroy {
  postForm: FormGroup;
  post: Post;
  postSubscription: Subscription;

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.postSubscription = this.store
        .select(getPostById, { id })
        .subscribe((data) => {
          this.post = data;
          this.createForm();
        });
    });
  }

  createForm() {
    this.postForm = new FormGroup({
      title: new FormControl(this.post.title, [
        Validators.required,
        Validators.minLength(6),
      ]),
      description: new FormControl(this.post.description, [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }

  ngOnDestroy() {
    if (this.postSubscription) {
      this.postSubscription.unsubscribe();
    }
  }

  showDescriptionError() {
    const descriptionForm = this.postForm.get('description');
    if (descriptionForm.touched && !descriptionForm.valid) {
      if (descriptionForm.errors.required) {
        return 'Description is required ';
      }
      if (descriptionForm.errors.minlength) {
        return 'Description should be minimum 20 characters';
      }
    }
  }

  onUpdatePost() {
    if (!this.postForm.valid) {
      return;
    }

    const post: Post = {
      title: this.postForm.value.title,
      description: this.postForm.value.description,
    };
  }
}
