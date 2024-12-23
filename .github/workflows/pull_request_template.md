> [!NOTE]
> If your Pull-Request is not yet ready for review, you should mark it as `Draft`.

## Checklist

Please check the following boxes to make sure your PR is ready for review.

It is a guideline, and you can take shortcuts if you know what you are doing,
but for most of the PRs you should be able to check all boxes.

## Is it ready for internal Review?

- [ ] The code is clean and readable
- [ ] The code is tested
- [ ] The pipeline is green
- [ ] The Branch is up-to-date with the `main` branch
- [ ] The Branch has no conflicts with the `main` branch

## Is it ready for QA / Merge?

- [ ] The PR has an approved Internal Review

## PR Process

Here a happy path example of the PR process.
It is able to take shortcuts when needed, but this is the recommended way for 99% of the PRs.

```mermaid
flowchart LR
    draft[Code]
    draft --> check_pipeline_positive
    draft -.-> internal_review
    subgraph developer[Developer Checks own PR]
        direction LR
        check_pipeline_positive[Pipeline green] --> check_code_good
        check_code_good[Code looks good] --> feature_good
        feature_good[Feature works]
    end
    feature_good --> internal_review_pipeline_positive
    subgraph internal_review[Team Review by own developers]
        direction LR
        internal_review_pipeline_positive[Pipeline green]
        internal_review_pipeline_positive --> internal_review_code_good
        internal_review_code_good[Code looks good]
    end
    internal_review_code_good --> qa_review
    subgraph qa_review[QA Review]
        direction LR
        qa_feature_good[Feature works]
    end
    qa_feature_good --> approved    
    approved --> merge