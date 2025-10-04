import { vi } from 'vitest'
import { AggregateRoot } from '../entities/aggregate-root'
import { UniqueEntityID } from '../entities/unique-entity-id'
import { DomainEvent } from './domain-event'
import { DomainEvents } from './domain-events'

class CustomAggregateCreated implements DomainEvent {
  public ocurredAt: Date
  private aggregate: CustomAggregate // eslint-disable-line

  constructor(aggregate: CustomAggregate) {
    this.ocurredAt = new Date()
    this.aggregate = aggregate
  }

  public getAggregateId(): UniqueEntityID {
    return this.aggregate.id
  }
}

class CustomAggregate extends AggregateRoot<null> {
  static create() {
    const aggregate = new CustomAggregate(null)

    aggregate.addDomainEvent(new CustomAggregateCreated(aggregate))

    return aggregate
  }
}

describe('Domain Events', () => {
  it('should be able to dispatch and listen to events', () => {
    const callBackSpy = vi.fn()

    // subscriber registered (listening to the "response created" event)
    DomainEvents.register(callBackSpy, CustomAggregateCreated.name)

    // creating a response but WITHOUT saving it to the database
    const aggregate = CustomAggregate.create()

    // Ensuring that the event was created but not triggered
    expect(aggregate.domainEvents).toHaveLength(1)

    // Saving the response to the database and thus triggering the event
    DomainEvents.dispatchEventsForAggregate(aggregate.id)

    // Subscriber listens to the event and does what needs to be done with the data
    expect(callBackSpy).toHaveBeenCalled()
    expect(aggregate.domainEvents).toHaveLength(0)
  })
})
